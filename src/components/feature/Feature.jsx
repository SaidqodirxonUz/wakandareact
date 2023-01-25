import React from "react";
import Award from "../../assets/future/award.svg";
import Support from "../../assets/future/headphones.svg";

import Verified from "../../assets/future/verified_user.svg";


function Feature() {
  return (
    <section id="features">
      <div className="container">
        <h3>Feature</h3>
        <h2>The benefit of using our platform</h2>
        <div className="flex">
          <div className="portion">
            <div className="feature">
              <span className="feature-icon-wraper">
                <img src={Award} alt="Award" />
              </span>
              <h4>Professional * Fast</h4>
              <p>
                Search and hire the most talented freelancers to match your
                needs. No matter what you need done, we've got the perfect
                freelancer for you.
              </p>
            </div>
          </div>
          <div className="portion">
            <div className="feature">
              <span className="feature-icon-wraper">
                <img src={Support} alt="support" />
              </span>
              <h4>24/7 support</h4>
              <p>
                You have any concerns or questions? Don’t worry, we have our
                support team to help you at anytime and anywhere.
              </p>
            </div>
          </div>
          <div className="portion">
            <div className="feature">
              <span className="feature-icon-wraper">
                <img src={Verified} alt="verified" />
              </span>
              <h4>Safe * Secure</h4>
              <p>
                We know that safety is the most important thing for our
                customer, so all of our payments are processed instantly and
                securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Feature;
