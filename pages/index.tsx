import Layout from "../layouts/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(undefined);

  const css = `
    #index-btn {
       margin-bottom: 20px;
       color: white;
    }
`;

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
        setUser(data.user)
        setAuth(true)
      })
    });
  }

  fetchUser();

}, []);

  // useEffect(() => {

  //   const fetchUser = async () => {
  //     await fetch("http://localhost:8080/api/authenticate", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         jwt: localStorage.getItem("token")
  //       }),
  //     }).then((res) => {
  //        res.json().then((data) => {
  //         setUser(data.user)
  //       })
  //     });
  //   }
    
  //   const token = async () => {    
  //       try {
  //         const token = localStorage.getItem("token");
  
  //         if (token && token !== undefined) {
  //           //   setMessage(`Logged in successfully`);
  //           setAuth(true);
  //         }
  //         // const response = await fetch("http://localhost:8000/api/user", {
  //         //   credentials: "include",
  //         // });
  
  //         // const content = await response.json();
  //         // setMessage(`Hi ${content.name}`);
  //         // setAuth(true);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //   }
  //   fetchUser();
  //   token();
  //   // (async () => {
  //   //   try {
  //   //     const token = localStorage.getItem("token");

  //   //     if (token && token !== undefined) {
  //   //       //   setMessage(`Logged in successfully`);
  //   //       setAuth(true);
  //   //     }
  //   //     // const response = await fetch("http://localhost:8000/api/user", {
  //   //     //   credentials: "include",
  //   //     // });

  //   //     // const content = await response.json();
  //   //     // setMessage(`Hi ${content.name}`);
  //   //     // setAuth(true);
  //   //   } catch (e) {
  //   //     console.log(e);
  //   //   }
  //   // })();
  // });

  return (
    <Layout auth={auth}>
      <style>{css}</style>
      {/* <span>{message}</span> */}
      <Link href="/search">
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          id="index-btn"
        >
          Search Testing Sites
        </button>
      </Link>
      <Link href="/onSiteTesting">
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          id="index-btn"
        >
          OnSite Testing
        </button>
      </Link>
      {user!=undefined && !user["customer"] ? <Link href="/on-site-booking">
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          id="index-btn"
        >
          On Site Booking
        </button>
      </Link> : <></>}
      {user!=undefined && user["customer"] ? <Link href="/booking">
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          id="index-btn"
        >
          Home Testing Booking
        </button>
      </Link> : <></>}
      {user!=undefined && !user["customer"] ? <Link href="/scan-qr-code">
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          id="index-btn"
        >
          Scan QR CODE
        </button>
      </Link> : <></>}
      <Link href="/check-status">
      <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          id="index-btn"
        >
          Check Status
        </button>
      </Link>
    </Layout>
  );
}
