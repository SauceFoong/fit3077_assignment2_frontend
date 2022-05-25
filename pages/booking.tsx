import React, { SyntheticEvent, useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

const HomeBooking = () => {
  const [checked, setChecked] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);

  const router = useRouter();
  
  useEffect(() =>{
    console.log(localStorage.getItem("token"))
    const fetchUser = async () => {
      await fetch("http://localhost:8080/api/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jwt: localStorage.getItem("token")
        }),
      }).then((res) => {
         res.json().then((data) => {
          setPatientId(data.user["id"])
          setAuth(true)
        })
      });
    }

    fetchUser();

  }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://localhost:8080/api/v1/home_booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ratTestKit: checked,
        customerId: patientId,
        startTime: new Date().toISOString()
      }),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data.id);
        if (data.id != undefined) {
          if (checked){
            router.push({pathname:"/successful-home-booking", query:{url: data.additionalInfo["URL"], pinCode: data.smsPin}})
          } else{
            router.push({pathname:"/successful-home-booking", query:{url: data.additionalInfo["URL"], qrCode: data.additionalInfo["QRCode"],pinCode: data.smsPin}})
          }
          
        } else {
          setMessage("Incorrect username or password.");
        }
      });
    });
  };

  const css = `
    .reminder {
       color: red;
    }
`;

  return (
    <Layout auth={auth}>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Home Testing Booking</h1>
        <input type="checkbox" id="rat_test_kit" name="rat_test_kit" onChange={(e) => setChecked(e.target.checked)}>
        </input>
        <label htmlFor="rat_test_kit">Have RAT test kit</label><br></br>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Book Now
        </button>
      </form>
    </Layout>
  );
};

export default HomeBooking;
