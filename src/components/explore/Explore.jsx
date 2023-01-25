import React from "react";
import ExploreImg from "../../assets/explore.png";

function Explore() {
  return (
    <section id="explore">
      <div className="container">
        <div className="flex">
          <div className="portion">
            <h2>Explore and hire talent from our platform</h2>
            <p>
              We've got experts for every industry - all under one roof! You can
              find everything from WordPress developers to Graphic designers to
              copywriters and many more at Wakanda.
            </p>
            <a href="#" className="main-btn">
              Explore now
            </a>
          </div>
          <div className="portion">
            <img src={ExploreImg} alt="Explore" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
