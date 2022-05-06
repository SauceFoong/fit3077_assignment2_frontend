import React, { SyntheticEvent, useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

const ScanQRCode = () => {
  const [qrCode, setQRCode] = useState("");
  const [patientId, setPatientId] = useState("");
  const [message, setMessage] = useState("");
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
    console.log(patientId)
    console.log(qrCode)
    await fetch("http://localhost:8080/api/v1/get-covid-test-kit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patientId: patientId, 
        QRCode: qrCode,
      }),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data.id);
        if (data.id != undefined) {
          router.push('successful-verify-user')
          
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
        <h1>Scan User QR Code</h1>
        <form onSubmit={submit}>
        <input
          type="text"
          className="form-control"
          placeholder="QR Code"
          required
          onChange={(e) => setQRCode(e.target.value)}
        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Scan
        </button>
        </form>
        <span className="reminder">
          <style>{css}</style>
          {message}
        </span>
    </Layout>
  );
};

export default ScanQRCode;
