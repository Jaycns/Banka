import React from "react";
import "./App.css";
import Savings from "./images/savings.svg";
import Banka from "./images/banka.png";
import { Link } from "react-router-dom";

function Add() {
  return (
    <div className="second">
      <div className="lander">
        <header className="maker">
          <div className="fronter">
            <img src={Banka} alt="I am here" />
            <h1 className="bead">Banka</h1>
          </div>
          <nav className="naver">
            <ul className="close">
              <Link to="/form">
                <li>Sign Up</li>
              </Link>
              <Link to="/signin">
                <li>Sign In</li>
              </Link>
            </ul>
          </nav>
        </header>
        <section id="insider">
          <aside className="drey">
            <img src={Savings} alt="I got" />
          </aside>
          <main className="jet">
            <article className="frys">
              Bank with Banka Today and discover a Fast and easier way to
              perform banking operaations from any locations on any modern
              device.
            </article>
            <Link to="/form">
              <button type="submit" className="btw">
                GET STARTED
              </button>
            </Link>
          </main>
        </section>
      </div>
      <footer className="feeter">@ Banka App design by Jaycn</footer>
    </div>
  );
}
export default Add;
