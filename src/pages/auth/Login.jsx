import React from "react";
import style from "./style/login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <style>
        .nav-item {"{"}
        margin: 5px;
        {"}"}
        .nav-pills .nav-link.active, .nav-pills .show &gt; .nav-link {"{"}
        color: #fff; background-color: #db3022;
        {"}"}
        .nav-pills .nav-link {"{"}
        width: 125px; height: 48px; background-color: #efefef; color: #9b9b9b;
        {"}"}
        @media only screen and (max-width: 576px) {"{"}
        .nav-pills .nav-link {"{"}
        width: 90px; height: 38px; padding: 0;
        {"}"}
        {"}"}
      </style>
      <div className={`${style.body}`}>
        <section className={`${style.container}`}>
          <div className={`${style.title}`}>
            <img src={require("../../assets/image/Group 1158.png")} />
          </div>
          <div className={`${style.text}`}>
            <p>Please login with your account</p>
          </div>
          <ul
            className="nav nav-pills mb-3 justify-content-center"
            role="tablist"
          >
            <li className="nav-item">
              <button
                className="nav-link active"
                data-toggle="pill"
                data-target="#customer"
                type="button"
              >
                Customer
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-toggle="pill"
                data-target="#seller"
                type="button"
              >
                Seller
              </button>
            </li>
          </ul>
          <section className="tab-content">
            <div className="tab-pane fade show active" id="customer">
              <div className={`${style.register}`}>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
              </div>
              <div className={`${style.Forgot}`}>
              <Link to="/forgot">Forgot password?</Link>
              </div>
              <div className={`${style.button}`}>
                <a href="../Home.html">
                  <Link to="/home"><button>LOGIN</button></Link>
                </a>
              </div>
              <div className={`${style.toRegist}`}>
                <p>
                  Don't have a Blanja account?
                  <span>
                    {" "}
                    <Link to="/register">Register</Link>{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="tab-pane fade" id="seller">
              <div className={`${style.register}`}>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
              </div>
              <div className={`${style.Forgot}`}>
              <Link to="/forgot">Forgot password?</Link>
              </div>
              <div className={`${style.button}`}>
                <a href="./pages/Home.jsx">
                <Link to="/home"><button>LOGIN</button></Link>
                </a>
              </div>
              <div className={`${style.toRegist}`}>
                <p>
                  Don't have a Blanja account?
                  <span>
                    {" "}
                    <Link to="/register">Register</Link>{" "}
                  </span>
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Login;
