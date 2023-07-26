import React from "react";
import "./services.css";
import { BsCheck2Circle } from "react-icons/bs";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Prototyping, wireframing, user flows and mockups</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Visual design and design software</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>User research and usability testing</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Application development</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Prioritization and time management</p>
            </li>
          </ul>
        </article>

        {/* End of UX Design*/}

        <article className="service">
          <div className="service__head">
            <h3>Graphics Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Logo Design</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Content Creation</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Social Media Graphics</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Product Design</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Branding Design</p>
            </li>
          </ul>
        </article>

        {/* End of Graphics Design*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Full-stack development</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Front-End Development</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Back-End Development</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Database management</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Landing Page Design</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
