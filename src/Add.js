import React from "react";
import "./App.css";
import Savings from "./images/savings.svg";
import Banka from "./images/banka.png";

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
              <li>Sign Up</li>
              <li>
                <a href="">Sign In</a>
              </li>
            </ul>
          </nav>
        </header>
        <section id="insider">
          <aside className="drey">
            <img src={Savings} />
          </aside>
          <main className="jet">
            <article className="frys">
              Bank with Banka Today and discover a Fast and easier way to
              perform banking operaations from any locations on any modern
              device.
            </article>
            <button type="submit" className="btw">
              GET STARTED
            </button>
          </main>
        </section>
      </div>
      <footer className="feeter">@ Banka CopyRight 2019</footer>
    </div>
  );
}
export default Add;
