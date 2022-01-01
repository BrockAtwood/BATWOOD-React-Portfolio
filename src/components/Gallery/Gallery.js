import React from "react";
import "./gallery.css";
//importing the Navbar from react-bootstrap
import { Card, Button } from "react-bootstrap";

//component is responsible for displaying cards of images, products in our database that have images we want to display on page loa

const Gallery = () => {
  //grab cards from the database, let me call map on that array of objects, and inside of that callback function i can call Card Component

  return (
    <>
      <h1 className="title">My Top 6 Portfolio Pieces</h1>
      <section className="container-fluid d-flex justify-content-center">
        <Card class="cbbody" style={{ width: "18rem" }}>
          <Card.Img
            class="samesize"
            variant="top"
            src={"/images/Delishery.png"}
          />
          <Card.Body>
            <Card.Title class="projecttitle">Delishery</Card.Title>
            <Button
              href="https://adrianauch.github.io/Delishery/"
              target="_blank"
              variant="outline-primary"
            >
              Deployed App
            </Button>
            <Button
              href="https://github.com/adrianauch/Delishery"
              target="_blank"
              variant="outline-primary"
            >
              GitHub Link
            </Button>
          </Card.Body>
        </Card>

        <Card class="cbbody" style={{ width: "18rem" }}>
          <Card.Img
            class="samesize"
            variant="top"
            src={"/images/sideswipe.png"}
          />
          <Card.Body>
            <Card.Title class="projecttitle">SideSwipe</Card.Title>
            <Button
              href="https://thawing-mesa-73583.herokuapp.com/"
              target="_blank"
              variant="outline-primary"
            >
              Deployed App
            </Button>
            <Button
              href="https://github.com/AdamKuemmel/CARS_project2"
              target="_blank"
              variant="outline-primary"
            >
              GitHub Link
            </Button>
          </Card.Body>
        </Card>

        <Card class="cbbody" style={{ width: "18rem" }}>
          <Card.Img
            class="samesize"
            variant="top"
            src={"/images/fitness.png"}
          />
          <Card.Body>
            <Card.Title class="projecttitle">Fitness Tracker</Card.Title>
            <Button
              href="https://serene-sands-75725.herokuapp.com/"
              target="_blank"
              variant="outline-primary"
            >
              Deployed App
            </Button>
            <Button
              href="https://github.com/BrockAtwood/BATWOOD-Fitness-Tracker"
              target="_blank"
              variant="outline-primary"
            >
              GitHub Link
            </Button>
          </Card.Body>
        </Card>

        <Card class="cbbody" style={{ width: "18rem" }}>
          <Card.Img
            class="samesize"
            variant="top"
            src={"/images/Notetaker.png"}
          />
          <Card.Body>
            <Card.Title class="projecttitle">Note Taker</Card.Title>
            <Button
              href="https://afternoon-harbor-31606.herokuapp.com/"
              target="_blank"
              variant="outline-primary"
            >
              Deployed App
            </Button>
            <Button
              href="https://github.com/BrockAtwood/NOTE-TAKER-FINAL-SUBMIT"
              target="_blank"
              variant="outline-primary"
            >
              GitHub Link
            </Button>
          </Card.Body>
        </Card>

        <Card class="cbbody" style={{ width: "18rem" }}>
          <Card.Img
            class="samesize"
            variant="top"
            src={"/images/workday.png"}
          />
          <Card.Body>
            <Card.Title class="projecttitle">Work Day Scheduler</Card.Title>
            <Button
              href="https://brockatwood.github.io/Work-Day-Planner/"
              target="_blank"
              variant="outline-primary"
            >
              Deployed App
            </Button>
            <Button
              href="https://github.com/BrockAtwood/Work-Day-Planner"
              target="_blank"
              variant="outline-primary"
            >
              GitHub Link
            </Button>
          </Card.Body>
        </Card>

        <Card class="cbbody" style={{ width: "18rem" }}>
          <Card.Img
            class="samesize"
            variant="top"
            src={"/images/password.png"}
          />
          <Card.Body>
            <Card.Title class="projecttitle">Password Generator</Card.Title>
            <Button
              href="https://brockatwood.github.io/Password-Generator/"
              target="_blank"
              variant="outline-primary"
            >
              Deployed App
            </Button>
            <Button
              href="https://github.com/BrockAtwood/Batwood-Password-Generator"
              target="_blank"
              variant="outline-primary"
            >
              GitHub Link
            </Button>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default Gallery;
