import React from "react";
import windowImg from "../../assets/window.png";

function Steps() {
  return (
    <section id="steps">
      <div className="container">
        <div className="flex">
          <div className="portion">
            <img src={windowImg} alt="window" />
          </div>
          <div className="portion">
            <h2>Wakanda is an easy platform to find talent</h2>
            <ol>
              <li>
                <span className="marker">1</span>Lorem.
              </li>
              <li>
                <span className="marker">2</span>Est, et!
              </li>
              <li>
                <span className="marker">3</span>Eligendi, consectetur iste.
              </li>
              <li>
                <span className="marker">4</span>Ipsa animi in officia?
              </li>
              <li>
                <span className="marker">5</span>Consequatur aspernatur odit sed
                fugit.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Steps;
