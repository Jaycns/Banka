import Banka from "./images/banka.png";
import React from "react";
import "./form.css";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <div className="biggie">
      <div className="logbox">
        <div className="wel">
          <Link to="/">
            <header>
              <img src={Banka} alt="" className="banks" />
              <h1>Banka</h1>
            </header>
          </Link>
          <div className="kiss">
            <h2>Welcome Back!</h2>
            <p>
              To continue our awesome journey together, login with your personal
              details
            </p>
            <Link to="/signin">
              <button>SIGN IN</button>
            </Link>
          </div>
        </div>
        <div className="frikkie">
          <header>Reset Password</header>
          <div className="inputbox">
            <div className="three">
              <input
                className="all"
                type="Email"
                name=""
                placeholder=""
                required="Email"
              />
              <label className="labs">Email *</label>
            </div>

            <a className="register-btn" href="">
              Reset
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forgot;
