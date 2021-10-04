import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <section className="footer">
      <div>
        <a href="http://www.brockatwood@gmail.com">
          <img
            src={process.env.PUBLIC_URL + "/Images/Gmail logo.png"}
            alt="Gmail Link"
            className="icon"
          />
        </a>
        <a href="https://github.com/BrockAtwood">
          <img
            src={process.env.PUBLIC_URL + "/Images/GitHub Logo.png"}
            alt="Github Link"
            className="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/brock-atwood-55135210/">
          <img
            src={process.env.PUBLIC_URL + "/Images/LinkedIn Logo.png"}
            alt="LinkedIn"
            className="icon"
          />
        </a>
        <a href="https://twitter.com/BrockAtwood">
          <img
            src={process.env.PUBLIC_URL + "/Images/Twitter logo.png"}
            alt="Github Link"
            className="icon"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
