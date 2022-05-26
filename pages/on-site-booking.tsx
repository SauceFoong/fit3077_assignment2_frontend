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
  const [testingSite, setTestingSite] = useState([]);


    const css = `
    #search-btn {
       margin-bottom: 20px;
       font-size: 10px;
       float: right;
       margin-top:20px;
    }

    .card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      width: 100%;
      font-size: 10px;
    }
    
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    
    .container {
      padding: 2px 16px;
    }

    .reminder {
      color: red;
   }
`;
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
        console.log("FETCHING USER")
        await fetch("http://localhost:8080/api/authenticate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jwt: localStorage.getItem("token")
          }),
        }).then((res) => {
           res.json().then(async (data) => {
            // setCustomerId(data.user["id"])
            setAuth(true)
          })
        });
      } 

    const fetchTestingSite = async () => {
        await fetch("https://fit3077.com/api/v2/testing-site", {
            method: "GET", 
            headers: {"Content-Type": "application/json", "Authorization": "Mtgh9G66WzMHcJf8NGcGmmDtjWmW96"},
        }).then((res) => {
            res.json().then((data) => {
                setTestingSite(data);
            })
        });
    }
    fetchUser();
    console.log("FETCH TESTING SITE");
    fetchTestingSite();
}, []);
  
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

  const submit = async (e) => {
    e.preventDefault();
    if (notes == "") {
        var requestBody = JSON.stringify({
            userName: userName,
            testingSiteId: e.target.testingSite.value,
            startTime: new Date().toISOString(),
          })
    } else{
        var requestBody = JSON.stringify({
            userName: userName,
            testingSiteId: e.target.testingSite.value,
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
        <br />
        <select className="w-100" name="testingSite">
                {
                    testingSite.map((site) => {
                        return (
                            <option value={site["id"]}>{site["name"]}</option>
                        )
                    })
                }
            </select>
          <div>
            <br />
          </div>

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
