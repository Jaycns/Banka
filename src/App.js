import "./App.css";
import * as React from "react";
import Savings from "./images/savings.svg";
import Angle from "./images/angle.svg";
import Banka from "./images/banka.png";
import Woman from "./images/woman.svg";
import Man from "./images/man.svg";
import Painter from "./images/game.svg";
import Add from "./Add";
import Form from "./form";
import SignIn from "./signin";
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
                Bank with Banka Today and discover a Fast and easier way to
                perform banking operaations from any locations on any modern
                device.
                <Link to="/form">
                  <button type="submit" className="btn">
                    GET STARTED
                  </button>
                </Link>
              </article>
            </main>
            <aside className="dre">
              <img src={Savings} />
            </aside>
          </section>
          <div className="floating-b">
            <img src={Angle} />
          </div>
        </div>
        <section id="dinner">
          <div className="jagz">
            <div className="jag">
              <img src={Woman} />
              <p>
                Bankaensures all accounts, transactions, and client detail are
                secure with end to end encription
              </p>
            </div>
            <div className="jag">
              <img src={Man} />
              <p>
                Bankaensures all accounts, transactions, and client detail are
                secure with end to end encription
              </p>
            </div>
            <div className="jag">
              <img src={Painter} />
              <p>
                Banka ensure the platform is easy to use with easy steps and
                descriptive functionalities.
              </p>
            </div>
          </div>
        </section>
        <footer>@ Banka CopyRight 2019</footer>
      </div>
    </div>
  );
}

export default App;
