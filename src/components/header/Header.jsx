import React from "react";
import Logo from "../../assets/Logo.svg";

function Header() {
  return (
    <header id="main-header">
      <div className="container">
        <nav className="main-nav">
          <div className="left">
            <img src={Logo} alt="Logo" className="header-logo-image" />
            <span className="header-logo-name">Wakanda</span>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us </a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">For freelancers</a>
              </li>
              <li>
                <a href="#" className="main-btn">
                  Get started
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <h1 className="ogohlantirish text-center">
        Ushbu Sayt React JS da yozilgan . <br />
        Lekin Telefon uchun moslashmagan React JS da yozilganga shubha bo`lsa
        kompyuterda ochib <b>F12</b> bosib ko`rishingiz mumkin 😂🤣
      </h1>
    </header>
  );
}
export default Header;
