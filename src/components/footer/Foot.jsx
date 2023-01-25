import React from "react";
import FooterLogo from "../../assets/footer/Logo-footer.svg";
import instagram from "../../assets/footer/instagram.svg";
import dribble from "../../assets/footer/dribble.svg";
import twitter from "../../assets/footer/twitter.svg";
import youtube from "../../assets/footer/youtube.svg";
import send from "../../assets/footer/send.svg";
function Foot() {
  return (
    <footer id="main-footer">
      <div className="container">
        <div className="flex">
          <div>
            <img className="footer-logo" src={FooterLogo} alt="FooterLogo" />
            <span className="footer-logo-name">Wakanda</span>
            <nav className="footer-socials">
              <ul>
                <li>
                  <a href="#">
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={dribble} alt="dribble" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={youtube} alt="youtube" />
                  </a>
                </li>
              </ul>
              <p>Copyright &copy; 2022 Wakanda. All rights reserved</p>
            </nav>
          </div>
          <nav className="footer-nav">
            <ul>
              <h5>Company</h5>
              <li>
                <a href="#">Lorem.</a>
              </li>
              <li>
                <a href="#">Molestiae.</a>
              </li>
              <li>
                <a href="#">Unde.</a>
              </li>
              <li>
                <a href="#">Soluta?</a>
              </li>
              <li>
                <a href="#">Praesentium?</a>
              </li>
            </ul>
            <ul>
              <h5>Support</h5>
              <li>
                <a href="#">Lorem.</a>
              </li>
              <li>
                <a href="#">Laborum.</a>
              </li>
              <li>
                <a href="#">Pariatur?</a>
              </li>
              <li>
                <a href="#">A.</a>
              </li>
              <li>
                <a href="#">Ex.</a>
              </li>
            </ul>
          </nav>
          <form action="/newsletter">
            <label htmlFor="email">Subscribe to our newsletter</label>
            <div className="footer-input-wraper">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                required
              />
              <img src={send} alt="Subscribe" />
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
