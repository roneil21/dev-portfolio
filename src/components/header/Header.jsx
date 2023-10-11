import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import Socials from "./Socials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className="text-light">HELLO I'M</h5>
        <h1>RONEIL O. ALGARA</h1>
        <h5 className="text-light">WEB DEVELOPER</h5>
        <CTA />
        <Socials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
