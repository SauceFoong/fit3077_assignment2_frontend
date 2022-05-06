import Layout from "../layouts/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);

  const css = `
    #index-btn {
       margin-bottom: 20px;
       color: white;
    }
`;

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");

        if (token && token !== undefined) {
          setAuth(true);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  });

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
    </Layout>
  );
}
