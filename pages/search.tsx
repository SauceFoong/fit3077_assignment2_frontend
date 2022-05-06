import Layout from "../layouts/Layout";
import { useEffect, useState } from "react";

export default function search() {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);
  const css = `
    #search-btn {
       margin-bottom: 20px;
       font-size: 10px;
    }
`;

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");

        if (token && token !== undefined) {
          //   setMessage(`Logged in successfully`);
          setAuth(true);
        }
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
        <form>
          <input type="text" className="w-100" placeholder="suburb"></input>

          <button
            className="w-10 btn-lg btn-primary"
            type="submit"
            id="search-btn"
          >
            Search
          </button>
        </form>
      </div>
    </Layout>
  );
}
