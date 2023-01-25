import React from "react";
import ShowcaseImg from "../../assets/showcase.png";

function Showcase() {
  return (
    <section id="showcase">
      <div className="container">
        <div className="flex">
          <div className="portion">
            <h1>Recruit top talented freelancer for your business</h1>
            <p>
              Connect you to thoudsands of talented freelancer from any
              industry. You can have the best people in just few simple steps.
            </p>
            <a href="#" className="main-btn">
              Get Started
            </a>
          </div>
          <div className="portion">
            <img src={ShowcaseImg} alt="Showcase" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Showcase;
