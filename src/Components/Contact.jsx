import React from "react";

const Contact = () => {
  return (
    <div id="Contact"className="contact-page-wrapper">
      <h1 className="primary-heading">Have a question?Ask us</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="your mail@email.com" />
        <button className="secondary-button">Submit</button>
      </div>
      
    </div>
  );
};

export default Contact;