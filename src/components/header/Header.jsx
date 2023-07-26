import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import Socials from "./Socials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className="text-light">Hello I'm</h5>
        <h1>Roneil Algara</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
