import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Roneil Algara
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://github.com">
          <BsGithub />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Roneil. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
