import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();

  const css = `

  
  .notification {
    background-color: #555;
    color: white;
    padding: 10px 10px;
    text-decoration: none;
    position: relative;
    display: inline-block;
    margin-right: 10px;
  }
  
  .notification:hover {
    opacity: 0.8; 
    text-decoration: none;
    color: #fff;
  }
  
  .notification .badge {
    position: absolute;
    top: -5px;
    right: -10px;
    border-radius: 50%;
    background-color: red;
    color: white;
  }

  .right {
      right:0; 
      display: flex; 
  }
`;

  const logout = async () => {
    localStorage.removeItem("token");
    // await fetch('http://localhost:8000/api/logout', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     credentials: 'include',
    // })

    await router.push("/login");
  };

  let menu;

  if (!props.auth) {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link href="/login">
            <a className="nav-link active">Login</a>
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <a href="#" className="nav-link active" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    );
  }

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossOrigin="anonymous"
        />
      </Head>
      <style>{css}</style>

      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Home</a>
          </Link>

          <div className="right">
            <a href="#" className="notification">
              <span>Notifications</span>
              <span className="badge">3</span>
            </a>

            <div>{menu}</div>
          </div>
        </div>
      </nav>

      <main className="form-signin">{props.children}</main>
    </>
  );
};

export default Layout;
