import React, { SyntheticEvent, useState } from "react";
import Layout from "../layouts/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

const Booking = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: username,
        password,
      }),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data.jwt);
        if (data.jwt && data.jwt !== undefined) {
          localStorage.setItem("token", data.jwt);
          router.push("/");
        } else {
          setMessage("Incorrect username or password.");
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
    <Layout>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>

        <span className="reminder">
          <style>{css}</style>
          {message}
        </span>
      </form>
    </Layout>
  );
};

export default Booking;
