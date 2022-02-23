import React from "react";
import Banka from "./images/banka.png";
import "./form.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="biggie">
      <div className="logbox">
        <div className="frikkie">
          <header>Sign In</header>
          <div className="inputbox">
            <div className="three">
              <input type="Email" name="" required="Email" className="all" />
              <label className="labs">Email *</label>
            </div>
            <div className="three">
              <input
                type="Password"
                name=""
                required="Username"
                className="all"
              />
              <label className="labs">Password *</label>
            </div>
            <a href="" className="register-btn">
              Register
            </a>
            <h3>
              Forgot Password?
              <Link to="/forgot">
                <span>Reset Password</span>
              </Link>
            </h3>
          </div>
        </div>
        <div className="wel">
          <Link to="/">
            <header>
              <img src={Banka} alt="I like" className="banks" />

              <h1>Banka</h1>
            </header>
          </Link>

          <div className="kiss">
            <h2>Hello Friend!</h2>
            <p>Enter your personal details and start banking with us</p>

            <Link to="/form">
              <button>SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
