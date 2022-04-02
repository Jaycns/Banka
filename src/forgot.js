import Banka from "./images/banka.png";
import React, { useState } from "react";
import Loader from "./loader";
import "./form.css";
import { Link } from "react-router-dom";

function Forgot() {
  const [isLoading, setIsLoading] = useState(false);

  function handleLoader() {
    setIsLoading(false);
  }

  return (
    <>
      {isLoading ? <Loader handleLoader={handleLoader} /> : null}
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
                To continue our awesome journey together, login with your
                personal details
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

              <a
                href="https://gogoanime.fi/"
                className="register-btn"
                onClick={() => setIsLoading(true)}
              >
                Reset
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Forgot;
