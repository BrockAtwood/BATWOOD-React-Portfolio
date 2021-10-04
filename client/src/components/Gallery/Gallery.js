import React from "react";
import "./gallery.css";

//component is responsible for displaying cards of images, products in our database that have images we want to display on page load

const projects = [
  {
    id: 1,
    image: "/images/Delishery.png",
    title: "Delishery",
    link: "https://adrianauch.github.io/Delishery/",
    github: "https://github.com/adrianauch/Delishery",
  },
  {
    id: 2,
    image: "/images/sideswipe.png",
    title: "SideSwipe",
    link: "https://thawing-mesa-73583.herokuapp.com/",
    github: "https://github.com/AdamKuemmel/CARS_project2",
  },
  {
    id: 3,
    image: "/images/fitness.png",
    title: "Fitness Tracker",
    link: "https://serene-sands-75725.herokuapp.com/",
    github: "https://github.com/BrockAtwood/BATWOOD-Fitness-Tracker",
  },
  {
    id: 4,
    image: "/images/Notetaker.png",
    title: "Note-Taker",
    link: "https://afternoon-harbor-31606.herokuapp.com/",
    github: "https://github.com/BrockAtwood/NOTE-TAKER-FINAL-SUBMIT",
  },
  {
    id: 5,
    image: "/images/workday.png",
    title: "Work Day Scheduler",
    link: "https://brockatwood.github.io/Work-Day-Planner/",
    github: "https://github.com/BrockAtwood/Work-Day-Planner",
  },
  {
    id: 6,
    image: "/images/password.png",
    title: "Password Generator",
    link: "https://brockatwood.github.io/Batwood-Password-Generator/",
    github: "https://github.com/BrockAtwood/Batwood-Password-Generator",
  },
];

const Gallery = () => {
  //grab cards from the database, let me call map on that array of objects, and inside of that callback function i can call Card Component

  return (
    <>
      <h1 className="title">My Top 6 Portfolio Pieces</h1>
      <section></section>
    </>
  );
};

export default Gallery;
