import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe.js";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Gallery from "./components/Gallery/Gallery.js";
import ContactForm from "./components/ContactForm/ContactForm";
import Resume from "./components/Resume/Resume.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path={["/", "/AboutMe", "/Home"]}>
            <AboutMe />
          </Route>
          <Route exact path="/Work">
            <Gallery />
          </Route>
          <Route exact path="/ContactMe">
            <ContactForm />
          </Route>
          <Route exact path="/Resume">
            <Resume />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
