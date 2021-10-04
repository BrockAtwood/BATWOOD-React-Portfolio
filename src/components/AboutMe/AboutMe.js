import React from "react";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <>
      <section className="aboutme">
        <div className="container row justify-content-between">
          <h1 className="text-center">Hello & Welcome! </h1>
          <h2 className="text-center">My name is Brock Atwood. </h2>
          <img
            src={process.env.PUBLIC_URL + "/images/IMG_3750.jpg"}
            alt="Profile Picture of Brock Atwood"
            className="rounded-circle col-1"
            style={{ width: "25%", height: "25%" }}
          />
          <p className="col-3">
            I am a former Middle & High School Algebra and Geometry teacher. I
            have taught for over 9 years now in education.
          </p>
          <p className="col-3">
            I am currently in a career change, enrolled in the Bootcamp Program
            for Full-Stack Web-Development at CU-Denver. When I complete the
            program, I am hoping to continue my learning and growth towards
            Cyber-Security.
          </p>
          <p className="col-3">
            I have developed skills involving but not limited to: HTML, CSS,
            Javascript, APIs, Node.js, OOP, Express,js, SQL, ORM, MVC, NoSQL,
            PWA, MongoDB, Mongo Atlas, React, and MERN Stack.
          </p>
          <p className="text-center">
            Feel free to check out some of my applications and projects on my
            Portfolio link in the top of the NavBar. As well as Contact me with
            any questions, comments or feedback on my Contact link in the
            NavBar.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
