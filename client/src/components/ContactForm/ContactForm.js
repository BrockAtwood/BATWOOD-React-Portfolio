import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

//capture First name and Last name from user input

//controlled inputs

const ContactForm = () => {
  //JS land
  //lets construct our state - data we want to track over time in this component
  //firstname and lastname
  //firstname = ""
  //;astname = ""
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [favfood, setFavFood] = useState("");

  //function is responsible for getting the value and name of the input which triggerd the change
  const handleInputChange = (e) => {
    // console.log(e.target);
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "firstname") {
      setFirstName(inputValue);
    } else if (inputType === "lastname") {
      setLastName(inputValue);
    } else setFavFood(inputValue);
  };

  //function is responsible for submitting the user info from the form
  const handleFormSubmit = (e) => {
    // console.log(e);
    e.preventDefault();

    //create a new user in our databaase, take the data we captured form handle input change that is now state,

    //email and passwword -- to verify for authentication
  };

  //JSX land
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="firstname"
            placeholder="Enter First Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            name="lastname"
            placeholder="Enter Last Name"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>

        <input
          value={favfood}
          name="favfood"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your favorite food"
        />
      </Form>
    </div>
  );
};

export default ContactForm;
