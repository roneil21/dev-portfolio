import React from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rp8cg04",
        "template_f7fno6v",
        form.current,
        "OciT_sZPvj3Hs0ZYV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section id="contacts">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>roneilalgara@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              target="_blank"
            >
              Send Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__icon" />
            <h4>Messenger</h4>
            <h5>Roneil Algara</h5>
            <a href="https://m.me/xionraven21" target="_blank">
              Send Message
            </a>
          </article>

          {/* <article className="contact__option">
            <FaWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>+63 961 393 0468</h5>
            <a
              href="https://api.whatsapp.com/send?phone=09613930468"
              target="_blank"
            >
              Send Message
            </a>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
