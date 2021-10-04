import React, { useState } from "react";
import "./contactform.css";
import { validateEmail } from "../../utils/helpers";

//capture First name and Last name from user input

//controlled inputs

const ContactForm = () => {
  //JS land
  //lets construct our state - data we want to track over time in this component
  //firstname and lastname
  //firstname = ""
  //;astname = ""
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //function is responsible for getting the value and name of the input which triggerd the change
  const handleInputChange = (e) => {
    // console.log(e.target);
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else setMessage(inputValue);
  };

  //function is responsible for submitting the user info from the form
  const handleFormSubmit = (e) => {
    // console.log(e);
    e.preventDefault();

    //create a new user in our databaase, take the data we captured form handle input change that is now state,

    //email and passwword -- to verify for authentication

    if (!validateEmail(email)) {
      window.alert("Please enter a valid Email Address.");
    } else {
      setName("");
      setEmail("");
      setMessage("");
      window.alert(
        "Thank you for your message. I will get back to you within the next 24-hours."
      );
    }
  };

  //JSX land
  return (
    <>
      <h1>Contact Me</h1>
      <form>
        <div className="container mb-3">
          <label for="exampleInputName1">Name:</label>
          <input
            name="name"
            value={name}
            type="text"
            class="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            onChange={handleInputChange}
            placeholder="Enter Your Full Name"
          />
        </div>
        <div className="container mb-3">
          <label for="exampleInputEmail1">Email:</label>
          <input
            name="email"
            value={email}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            onChange={handleInputChange}
            placeholder="Enter Your Email Here"
          />
        </div>
        <div className="container mb-3">
          <label for="exampleFormControlTextarea1">Message:</label>
          <input
            name="message"
            value={message}
            type="text"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={handleInputChange}
            placeholder="Enter Your Message Here"
          />
        </div>
        <div className="container mb-3">
          <button
            type="submit"
            class="text-center btn btn-primary"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
          <p>
            Email:
            <a href="http://www.brockatwood@gmail.com">
              @Brockatwood@gmail.com
            </a>
          </p>
          <p>Phone Number: (802)-318-6522</p>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
