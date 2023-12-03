import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ipu95x6",
      "template_6dwkbuk",
      form.current,
      "JcpzPK5pINSSTdpgm"
    );
    e.target.reset();
  };

  return (
    <section className="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__content container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name"></input>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
          ></input>
          <label>Subject</label>
          <input type="text" name="subject" placeholder="Enter subject"></input>
          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Type your message here"
            name="message"
          ></textarea>
          <button className="button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
