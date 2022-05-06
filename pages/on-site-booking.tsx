import React, { SyntheticEvent, useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

const OnSiteBooking = () => {
  const [checked, setChecked] = useState(false);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);
  const [notes, setNotes] = useState("");

  const router = useRouter();
  
//   useEffect(() =>{
//     const fetchUser = async () => {
//       await fetch("http://localhost:8080/api/authenticate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           jwt: localStorage.getItem("token")
//         }),
//       }).then((res) => {
//          res.json().then((data) => {
//           setPatientId(data.user["id"])
//           setAuth(true)
//         })
//       });
//     }

//     fetchUser();

//   }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (notes == "") {
        var requestBody = JSON.stringify({
            userName: userName,
            startTime: new Date().toISOString(),
          })
    } else{
        var requestBody = JSON.stringify({
            userName: userName,
            startTime: new Date().toISOString(),
            notes: notes,
          })
    }
    
    await fetch("http://localhost:8080/api/v1/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBody,
    }).then((res) => {
      res.json().then((data) => {
        console.log(data.id);
        if (data.id != undefined) {
        router.push({pathname:"/successful-booking", query:{pinCode: data.smsPin}})
        } else {
          setMessage("UserName invalid");
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
        <h1 className="h3 mb-3 fw-normal">Onsite Booking</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Note"
        //   required
          onChange={(e) => setNotes(e.target.value)}
        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Register
        </button>
      </form>
      <span className="reminder">
          <style>{css}</style>
          {message}
        </span>
    </Layout>
  );
};

export default OnSiteBooking;
