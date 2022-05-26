import React, { SyntheticEvent, useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

const Admin = () => {
  const [checked, setChecked] = useState(false);

  const [auth, setAuth] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [userId, setUserId] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("http://localhost:8080/api/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jwt: localStorage.getItem("token"),
        }),
      });

      const json = await response.json();

      setUserId(json.user.id);
      setInterval(() => {
        fetchNotifications(json.user.id);
      }, 1000);

      //await fetchNotifications(json.user.id);
    };
    const fetchBooking = async () => {
      await fetch("http://localhost:8080/api/v1/booking", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        res.json().then((data) => {
          setBookings(data);
        });
      });
    };

    const fetchNotifications = async (userId: string) => {
      console.log(userId);
      // http://localhost:8080/api/get-notifications/ + userId
      await fetch("http://localhost:8080/api/get-notifications/" + userId, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        res.json().then((data) => {
          //   const arr = [];
          //   for (const unreadNoti of data.notifications) {
          //     if (unreadNoti.read == false) {
          //       arr.push(unreadNoti);
          //     }
          //   }
          setNotifications(data.notifications);
        });
      });
    };

    fetchUser();
    fetchBooking();
  }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // await fetch("http://localhost:8080/api/v1/home_booking", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     ratTestKit: checked,
    //     customerId: patientId,
    //     startTime: new Date().toISOString()
    //   }),
    // }).then((res) => {
    //   res.json().then((data) => {
    //     console.log(data.id);
    //     if (data.id != undefined) {
    //       if (checked){
    //         router.push({pathname:"/successful-home-booking", query:{url: data.additionalInfo["URL"], pinCode: data.smsPin}})
    //       } else{
    //         router.push({pathname:"/successful-home-booking", query:{url: data.additionalInfo["URL"], qrCode: data.additionalInfo["QRCode"],pinCode: data.smsPin}})
    //       }

    //     } else {
    //       setMessage("Incorrect username or password.");
    //     }
    //   });
    // });
  };

  const deleteBooking = async (bookingId: string) => {
    console.log("Delete Booking", bookingId);
    // await fetch("http://localhost:8080/api/v1/delete_booking/" + bookingId, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.text()) // or res.json()
    //   .then((res) => console.log(res));
    await fetch("http://localhost:8080/api/v1/delete_booking/" + bookingId, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jwt: localStorage.getItem("token"),
      }),
    });
  };

  const css = `
  table, th, td {
    border:1px solid black;
  }

  .notificationBlock {
    padding: 10px;
    background-color: #2196F3;
    color: white;
    opacity: 1;
    transition: opacity 0.6s;
    margin-bottom: 15px;
  }

  .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .closebtn:hover {
    color: black;
  }
`;

  return (
    <Layout auth={auth}>
      <style>{css}</style>

      {notifications &&
        notifications.map((notification) => {
          return (
            <div className="notificationBlock" key={notification.id}>
              <span className="closebtn">&times;</span>
              {notification.message}
            </div>
          );
        })}

      <table key={1}>
        <th>{"Booking ID"}</th>
        <th>{"Customer Name"}</th>
        <th>{"Phone Number"}</th>
        <th>{"Status"}</th>
        <th>{"Actions"}</th>

        {bookings.map((booking) => {
          return (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>
                {booking.customer.givenName} {booking.customer.givenName}
              </td>
              <td>{booking.customer.phoneNumber}</td>
              <td>{booking.status}</td>
              <td>
                <button onClick={async () => await deleteBooking(booking.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </Layout>
  );
};

export default Admin;
