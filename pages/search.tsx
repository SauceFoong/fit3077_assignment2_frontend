import Layout from "../layouts/Layout";
import { useEffect, useState } from "react";

export default function search() {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);
  const [testingSites, setTestingSites] = useState([]);

  const css = `
    #search-btn {
       margin-bottom: 20px;
       font-size: 10px;
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

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    console.log(event.target.suburb.value);
    console.log(event.target.facilityType.value);
    console.log(event.target.onSiteBooking.checked);
    console.log(event.target.onSiteTesting.checked);
    console.log(event.target.open.checked);
    console.log(event.target.waitTime.value);

    const data = {
      suburb: event.target.suburb.value,
      facilityType: parseInt(event.target.facilityType.value),
      onSiteBooking: event.target.onSiteBooking.checked,
      onSiteTesting: event.target.onSiteTesting.checked,
      open: event.target.open.checked,
      minutesToWait: parseInt(event.target.waitTime.value),
    };

    await fetch("http://localhost:8080/api/testing-site/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setTestingSites(data.testingSites);
      });
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");

        // if (token && token !== undefined) {
        //   //   setMessage(`Logged in successfully`);
        //   setAuth(true);
        // }
        // const response = await fetch("http://localhost:8000/api/user", {
        //   credentials: "include",
        // });

        // const content = await response.json();
        // setMessage(`Hi ${content.name}`);
        // setAuth(true);
      } catch (e) {
        console.log(e);
      }
    })();
  });

  return (
    <Layout auth={auth}>
      <style>{css}</style>
      {/* <span>{message}</span> */}
      <div className="row">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-100"
            placeholder="suburb"
            name="suburb"
          ></input>
          <label> Facility Type</label>
          <select className="w-100" name="facilityType">
            <option value={0}>Drive Through</option>
            <option value={1}>Walk-in</option>
            <option value={2}>Clinics</option>
            <option value={3}>GPs</option>
            <option value={4}>Hospitals</option>
          </select>
          <input
            type="checkbox"
            id="onSiteBooking"
            name="onSiteBooking"
            value="onSiteBooking"
          />
          <label> On Site Booking</label>
          <br />
          <input
            type="checkbox"
            id="onSiteTesting"
            name="onSiteTesting"
            value="onSiteTesting"
          />
          <label> On Site Testing</label>

          <br />
          <input type="checkbox" id="open" name="open" value="open" />
          <label> Open</label>

          <br />
          <label> Wait Time</label>

          <select className="w-100" name="waitTime">
            <option value={60}>Within 60 minutes</option>
            <option value={120}>Within 120 minutes</option>
          </select>
          <button
            className="w-10 btn-lg btn-primary"
            type="submit"
            id="search-btn"
          >
            Search
          </button>
        </form>

        {testingSites &&
          testingSites.map((testingSite, index) => {
            return (
              <div key={index} className="card">
                <div className="container">
                  <h2>{testingSite.name}</h2>
                  Description: <p>{testingSite.description}</p>
                  Phone Number: <p>{testingSite.phoneNumber}</p>
                  Address:
                  <p>
                    {testingSite.address.unitNumber}{" "}
                    {testingSite.address.street},{testingSite.address.suburb}{" "}
                    {testingSite.address.postcode}
                    {testingSite.address.state}{" "}
                  </p>
                  Operation Hour:
                  <p>
                    {testingSite.additionalInfo.openTime} -{" "}
                    {testingSite.additionalInfo.closeTime}{" "}
                  </p>
                  onSiteBooking:
                  <p>
                    {testingSite.additionalInfo.onSiteBooking
                      ? "Provided"
                      : "Not provided"}
                  </p>
                  onSiteTesting:
                  <p>
                    {testingSite.additionalInfo.onSiteTesting
                      ? "Provided"
                      : "Not provided"}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}
