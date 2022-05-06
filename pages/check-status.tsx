import React, { SyntheticEvent, useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

const CheckStatus = () => {
  const [pinCode, setPinCode] = useState("");
  const [patientId, setPatientId] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [auth, setAuth] = useState(false);

  const router = useRouter();
  
  useEffect(() =>{
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
    await fetch("http://localhost:8080/api/v1/booking_info/" + pinCode, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res.json().then((data) => {
        console.log(data)
        if (data.length == 0){
            setMessage("Incorrect PIN CODE.");
        }
        else if (data[0].id != undefined) {
          setStatus(data[0].status)
          setMessage("")
        } else {
          setMessage("Incorrect QR CODE.");
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
        <h1>Check Booking Status</h1>
        <form onSubmit={submit}>
        <input
          type="text"
          className="form-control"
          placeholder="PIN Code"
          required
          onChange={(e) => setPinCode(e.target.value)}
        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Check
        </button>
        </form>
        <span className="reminder">
          <style>{css}</style>
          {message}
        </span>
        <br></br>
        {status != "" ? <span className="reminder">
          <style>{css}</style>
          Booking Status: {status}
        </span> : <></>}
    </Layout>
  );
};

export default CheckStatus;
