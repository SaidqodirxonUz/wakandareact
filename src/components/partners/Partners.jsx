import React from "react";
import airbnb from "../../assets/Partners/Airbnb.svg";
import google from "../../assets/Partners/Google.svg";
import slack from "../../assets/Partners/Slack.svg";
import netflix from "../../assets/Partners/Netflix.svg";
import amazon from "../../assets/Partners/amazon.svg";

function Partners() {
  return (
    <section id="partners">
      <div className="container">
        <div className="flex">
          <img src={airbnb} alt="airbnb" />
          <img src={google} alt="google" />
          <img src={slack} alt="slack" />
          <img src={netflix} alt="netflix" />
          <img src={amazon} alt="amazon" />
        </div>
      </div>
    </section>
  );
}
export default Partners;
