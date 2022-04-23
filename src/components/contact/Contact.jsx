import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/envelope.png";
import Address from "../../img/location.png";
import {useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ubmzw0j",
        "template_2ot0ebg",
        formRef.current,
        "eUnFIOxyB69qhmhF9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's talk!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 (818) 813-3537
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              alexkhazhakyan@ymail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              United States of America
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>I would love to chat! </b> Get in touch if you're interested
            in learning more about my skillset and experience. I would love to
            showcase what I can offer to your company.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && " Thank you!"}
          </form>
        </div>
      </div>
      <div className="icons-wrapper">
        <i className="ri-instagram-line icon"></i>
        <i className="ri-linkedin-line icon"></i>
        <i className="ri-github-fill icon"></i>
        <i class="ri-linkedin-line"></i>
        <i class="ri-github-fill"></i>
      </div>
    </div>
  );
};

export default Contact;