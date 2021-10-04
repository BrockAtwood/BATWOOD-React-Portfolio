import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe.js";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Gallery from "./components/Gallery/Gallery.js";
import ContactForm from "./components/ContactForm/ContactForm";
import Resume from "./components/Resume/Resume.js";

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
