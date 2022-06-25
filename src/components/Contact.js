import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";





const Result = () => {
  return (
    <p className="result-book-demo">Your request has been sent, we will be contact soon with booking times</p>
  );
};

const Contact = () => {
  const [result, showResult] = useState(false)
 

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k4aiwmr",
        "template_rer8is9",
        form.current,
        "Fh0Y9YM-DloiKhGif"
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
      showResult(true)
  };

  return (
     <div className="form-section">
      <form className="form-input-section"  ref={form} onSubmit={sendEmail}>
        <input  className="input-field" type="email" name="user_email" placeholder="sophie@example.com" />
        <input className="schedule-demo"  type="submit" value="Schedule a Demo" />
      </form>
      <div className="result"> {result ? <Result/> : null}</div>
   </div> 
  );
};

export default Contact;