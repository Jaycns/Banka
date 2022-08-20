import "./App.css";
import * as React from "react";
import Savings from "./images/savings.svg";
import Angle from "./images/angle.svg";
import Banka from "./images/banka.png";
import Woman from "./images/woman.svg";
import Man from "./images/man.svg";
import Painter from "./images/game.svg";
import Add from "./Add";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="box">
      <Add />
      <div className="flush">
        <div className="landing">
          <header className="llheader">
            <div className="front">
              <img src={Banka} className="logo" alt="I am here" />

              <h1 className="beader">Banka</h1>
            </div>
            <nav className="never">
              <ul className="open">
                <Link to="/form">
                  <li className="hat">Sign Up</li>
                </Link>
                <Link to="/signin">
                  <li>Sign In</li>
                </Link>
              </ul>
            </nav>
          </header>
          <section id="inner">
            <main>
              <article className="fry">
                Bank with Jaycn today and discover a faster and easier way to
                perform banking operaations from any location on any modern
                device.
                <Link to="/form">
                  <button type="submit" className="btn">
                    GET STARTED
                  </button>
                </Link>
              </article>
            </main>
            <aside className="dre">
              <img src={Savings} alt="I am here" />
            </aside>
          </section>
          <div className="floating-b">
            <a href="#dinner" className="floating-b">
              <img src={Angle} alt="I am here" />
            </a>
          </div>
        </div>
        <section id="dinner">
          <div className="jagz">
            <div className="jag">
              <img src={Woman} alt="I am here" />
              <p>
                Bankaensures all accounts, transactions, and client detail are
                secure with end to end encription
              </p>
            </div>
            <div className="jag">
              <img src={Man} alt="I am here" />
              <p>
                Bankaensures all accounts, transactions, and client detail are
                secure with end to end encription
              </p>
            </div>
            <div className="jag">
              <img src={Painter} alt="I am here" />
              <p>
                Banka ensure the platform is easy to use with easy steps and
                descriptive functionalities.
              </p>
            </div>
          </div>
        </section>
        <footer>@ Banka App design by Jaycn</footer>
      </div>
    </div>
  );
}

export default App;
