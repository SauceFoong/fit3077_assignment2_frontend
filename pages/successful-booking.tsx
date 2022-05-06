import React, { SyntheticEvent, useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { withRouter } from 'next/router'
import { route } from "next/dist/next-server/server/router";


const SuccessBooking = () => {
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);
  const [patientId, setPatientId] = useState("");


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

  const css = `
    .reminder {
       color: red;
    }
`;

  return (
    <Layout auth={auth}>
        <div>
            <h1 className="h3 mb-3 fw-normal">Booking Success</h1>
        </div>
        <div>
            <h1 className="h5 mb-3 fw-normal" >PIN CODE: <a>{router.query.pinCode}</a></h1>
        </div>
    </Layout>
  );
};

export default withRouter(SuccessBooking);
