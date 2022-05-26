import React from "react";
import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";

export default function ActiveBooking() {
    const [message, setMessage] = useState("")
    const [testingSite, setTestingSite] = useState([]);
    const [auth, setAuth] = useState(false);
    const [activeBooking, setBooking] = useState([]);
    const [customerId, setCustomerId] = useState("");
    const [clicked, setClicked] = useState(false);
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
`;

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
                setCustomerId(data.user["id"])
                setAuth(true)
                fetchActiveBooking(data.user["id"]);
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

        const fetchActiveBooking = async (id) => {
            console.log("FETCH ACTIVE BOOKING")
            await fetch("http://localhost:8080/api/active_booking/" + id , {
                method: 'GET',
                headers: {"Content-Type": "application/json"}
            }).then((res) => {
                res.json().then((data) => {
                    setBooking(data);
                })
            })
        }
        fetchUser();
        console.log("FETCH TESTING SITE");
        fetchTestingSite();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        var startTime;
        var testingSiteId;
        if (event.target.startTime.value == "") {
            startTime = activeBooking[0]["startTime"];
        }
        else {
            startTime = event.target.startTime.value;
        }
        if (event.target.testingSite.value == "None") {
            testingSiteId = activeBooking[0]["testingSite"]["id"];
        }
        else {
            testingSiteId = event.target.testingSite.value;
        }
        var data;
        if (event.target.previousRecord.value == "None") {
            data = JSON.stringify({
                testingSiteId: testingSiteId,
                startTime: startTime,
            });
        }
        else {
            data = event.target.previousRecord.value;
        }

        console.log(data);

        await fetch("http://localhost:8080/api/change_booking/" + activeBooking[0]["id"], {
            method: "POST", 
            headers: {'Content-Type': 'application/json'},
            body: data,
        }).then((res) => {
            res.json().then((data) => {
                
            })
        })

    }

    return (
        <Layout auth={auth}>
            <style>{css}</style>
            <div className="row">
                <h4>
                    Current Active Booking <br />
                </h4>
            </div>
            <br /> 
            {activeBooking.length != 0 ? 
            <div>
            <div className="row">
                Venue: {activeBooking[0]["testingSite"]["name"]} <br />
            </div>
            <div className="row">
                DateTime: {activeBooking[0]["startTime"]} <br />
            </div> </div>:<></>}<br />
            <button className="w-100 btn btn-lg btn-primary" onClick={(e) => setClicked(!clicked)}>
                Modify Booking
            </button>
            <br /> 
            <br /> 
            {clicked ? 
            <form onSubmit = {handleSubmit}>
            <div>Select Venue and Time</div>
            <div className="row">
            <select className="w-100" name="testingSite">
                <option value = {"None"}>---</option>
                {
                    testingSite.map((site) => {
                        return (
                            <option value={site["id"]}>{site["name"]}</option>
                        )
                    })
                }
            </select>
            <br/>
            <div>
                <br></br>
            </div>
            <input type="datetime-local" id="startTime" name="startTime"></input>
            <div>
                <br></br>
            </div>
            <div>Select From Previous Changes</div>
            <select className="w-100" name="previousRecord">
                <option value = {"None"}>---</option>
            {   
                'pastChanges' in activeBooking[0]["customer"]["additionalInfo"] ? 
                activeBooking[0]["customer"]["additionalInfo"]["pastChanges"].map((changes) => {
                    const data = {
                        testingSiteId: changes["testingSiteId"],
                        startTime: changes["startTime"]
                    }
                    return (
                        <option value={JSON.stringify(data)}>{changes["testingSiteName"] + ' --- '+ changes["startTime"]}</option>
                    )
                }) : <></>
            }
            </select>
            <br />
            <div>
                <br />
            </div>
            
        </div> 
        <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            id="modify-btn"
          >
            Confirm Change
          </button>
        </form>
        : <></>
            }
        </Layout>
    );
}