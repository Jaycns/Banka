import React from "react";
import Banka from "./images/banka.png";
import "./form.css";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div className="biggie">
      <div className="logbox">
        <div className="wel">
          <Link to="/">
            <header>
              <img src={Banka} className="banks" />
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
          <header>Sign Up</header>
          <div className="inputbox">
            <div className="namebox">
              <div className="slab">
                <input
                  className="one"
                  type="text"
                  name=""
                  required="First Name"
                />

                <label className="lab">First Name *</label>
              </div>
              <div className="slab">
                <input
                  className="two"
                  type="text"
                  name=""
                  required="Last Name *"
                />
                <label className="slam">Last Name *</label>
              </div>
            </div>
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
            <div className="three">
              <input
                type="Password"
                className="all"
                name=""
                required="Username"
              />

              <label className="labs">Password *</label>
            </div>
            <div className="three">
              <input type="text" className="all" name="" required="Username" />
              <label className="labs">Confirm Password *</label>
            </div>

            <a href="" className="register-btn">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
