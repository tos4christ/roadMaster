import React from "react";

const submitQuery = (event) => {
  event.preventDefault();
};
const ContactForm = () => {
  return (
    <div className="col-lg-6">
      <div className="contact-form">
        <h4>Get in Touch</h4>
        <p className="form-message"></p>
        <form id="contact-form" action="#" method="POST" onSubmit={submitQuery}>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Your Email"
          />
          <input
            type="text"
            name="subject"
            required
            placeholder="Your Subject"
          />
          <textarea placeholder="Messege" required name="message"></textarea>
          <button type="submit" name="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
