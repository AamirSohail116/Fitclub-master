import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Join.css";

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_riu1hui",
        "template_hkrifxt",
        form.current,
        "d9LptIEcMTzQK1of1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span> Level up</span>
        </div>
        <div>
          <span>Your body </span>
          <span className="stroke-text">with us</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
          />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
