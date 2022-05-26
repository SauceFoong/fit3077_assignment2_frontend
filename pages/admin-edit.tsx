import { SyntheticEvent, useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Router from "next/router";
import { useRouter } from "next/router";

const AdminPanel = () => {
  const [booking, setBooking] = useState([]);
  const [auth, setAuth] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const [testingSite, setTestingSite] = useState([]);
  const router = useRouter();

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
   hr.solid {
    border-top: 3px solid #bbb;
  }
`;

  //    const router = useRouter();

  useEffect(() => {
    if (router.query && typeof router.query.pin === "string") {
      setBookingId(router.query.pin);
    }
    const fetchUser = async () => {
      await fetch("http://localhost:8080/api/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jwt: localStorage.getItem("token"),
        }),
      }).then((res) => {
        res.json().then(async (data) => {
          setAuth(true);
        });
      });
    };
  });

  const fetchTestingSite = async () => {
    await fetch("https://fit3077.com/api/v2/testing-site", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Mtgh9G66WzMHcJf8NGcGmmDtjWmW96",
      },
    }).then((res) => {
      res.json().then((data) => {
        setTestingSite(data);
      });
    });
  };

  const handleChangeBookingSubmit = async (event) => {
    event.preventDefault();

    var startTime;
    var testingSiteId;
    if (event.target.startTime.value == "") {
      startTime = booking["startTime"];
    } else {
      startTime = event.target.startTime.value;
    }
    if (event.target.testingSite.value == "None") {
      testingSiteId = booking["testingSite"]["id"];
    } else {
      testingSiteId = event.target.testingSite.value;
    }
    var data;
    if (event.target.previousRecord.value == "None") {
      data = JSON.stringify({
        testingSiteId: testingSiteId,
        startTime: startTime,
      });
    } else {
      data = event.target.previousRecord.value;
    }

    console.log(data);

    await fetch("http://localhost:8080/api/change_booking/" + booking["id"], {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    }).then((res) => {
      res.json().then((data) => {});
    });
  };

  const cancelBooking = async (event) => {
    event.preventDefault();
    console.log("Cancel Booking");
    await fetch("http://localhost:8080/api/cancel_booking/" + booking["id"], {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res.json().then((data) => {
        if (data.message == "Successfully cancel booking.") {
          Router.reload();
        }
      });
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/api/v1/booking_info/" + bookingId, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res.json().then((data) => {
        console.log("WTF", e.target.value, data);
        if (data.length == 0) {
          setMessage("Incorrect PIN CODE.");
        } else if (data[0].id != undefined) {
          setBooking(data[0]);
          fetchTestingSite();
          setMessage("");
        } else {
          setMessage("Incorrect QRCODE.");
        }
      });
    });
  };

  return (
    <Layout auth={auth}>
      <div>
        <h4>Admin Panel - Change Booking</h4>
        <br />
      </div>
      <form onSubmit={submit}>
        <input
          type="text"
          className="form-control"
          placeholder="Booking ID"
          defaultValue={router.query.pin}
          required
          onChange={(e) => {
            setBookingId(e.target.value);
            console.log(e.target.value, typeof e.target.value);
          }}
        />
        <div>
          <br />
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          CHECK
        </button>
      </form>
      <div>
        <br />
      </div>
      <span className="reminder">
        <style>{css}</style>
        {message}
      </span>
      <hr className="solid"></hr>
      <div>
        <br />
        {booking.length != 0 ? (
          <div>
            <b>Booking ID</b>: {booking["id"]}
            <br />
            <b>Venue</b>: {booking["testingSite"]["name"]}
            <br />
            <b>Status</b>: {booking["status"]}
            <br />
            <b>Start Time</b>: {booking["startTime"]}
          </div>
        ) : (
          <div></div>
        )}
        {booking.length != 0 ? (
          Date.parse(booking["startTime"]) < Date.parse(Date()) &&
          booking["status"] != "CANCELED" ? (
            <span className="reminder">
              <style>{css}</style>
              Time Lapsed -- Cannot Modify
            </span>
          ) : (
            <div>
              <br />
              <button
                className="w-100 btn btn-lg btn-primary"
                onClick={(e) => setChecked(!checked)}
              >
                Modify Booking
              </button>
              <br />
              <div>
                <br />
              </div>
              <button
                className="w-100 btn btn-lg btn-primary"
                onClick={cancelBooking}
              >
                Cancel Booking
              </button>
              <br />
              <br />
              {checked ? (
                <form onSubmit={handleChangeBookingSubmit}>
                  <div>Select Venue and Time</div>
                  <div className="row">
                    <select className="w-100" name="testingSite">
                      <option value={"None"}>---</option>
                      {testingSite.map((site) => {
                        return (
                          <option value={site["id"]}>{site["name"]}</option>
                        );
                      })}
                    </select>
                    <br />
                    <div>
                      <br></br>
                    </div>
                    <input
                      type="datetime-local"
                      id="startTime"
                      name="startTime"
                    ></input>
                    <div>
                      <br></br>
                    </div>
                    <div>Select From Previous Changes</div>
                    <select className="w-100" name="previousRecord">
                      <option value={"None"}>---</option>
                      {"pastChanges" in
                      booking["customer"]["additionalInfo"] ? (
                        booking["customer"]["additionalInfo"][
                          "pastChanges"
                        ].map((changes) => {
                          const data = {
                            testingSiteId: changes["testingSiteId"],
                            startTime: changes["startTime"],
                          };
                          return (
                            <option value={JSON.stringify(data)}>
                              {changes["testingSiteName"] +
                                " --- " +
                                changes["startTime"]}
                            </option>
                          );
                        })
                      ) : (
                        <></>
                      )}
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
              ) : (
                <></>
              )}
            </div>
          )
        ) : (
          <div></div>
        )}
      </div>
    </Layout>
  );
};

export default AdminPanel;
