import "./App.css";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import ProjectPage from "./Components/ProjectsPage";
import ResumePage from "./Components/ResumePage";
import { useState } from "react";
import logo from "./images/logo.png";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

function App() {
  const [Home, setHome] = useState(true);
  const [About, setAbout] = useState(false);
  const [Contact, setContact] = useState(false);
  const [Cv, setCv] = useState(false);
  const [Projects, setProjects] = useState(false);
  function handleChange(type) {
    if (type === "home") {
      setAbout(false);
      setContact(false);
      setProjects(false);
      setCv(false);
      setHome(true);
    } else if (type === "About") {
      setHome(false);
      setContact(false);
      setProjects(false);
      setCv(false);
      setAbout(true);
    } else if (type === "Contact") {
      setHome(false);
      setAbout(false);
      setProjects(false);
      setCv(false);
      setContact(true);
    } else if (type === "Resume") {
      setHome(false);
      setAbout(false);
      setContact(false);
      setProjects(false);
      setCv(true);
    } else {
      setHome(false);
      setAbout(false);
      setContact(false);
      setCv(false);
      setProjects(true);
    }
  }

  return (
    <div className="app">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="main-navbar"
      >
        <Grid item className="navbar-logo">
          <Button>
            <img src={logo} alt="image" />
            <span>WhySoOpKratos</span>
          </Button>
        </Grid>
        <Grid item className="navbar-title">
          <ul>
            <Button onClick={() => handleChange("home")}>Home</Button>
            <Button onClick={() => handleChange("About")}>About</Button>
            <Button onClick={() => handleChange("Contact")}>Contact</Button>
            <Button onClick={() => handleChange("Resume")}>Resume</Button>
            <Button onClick={() => handleChange("Projects")}>Projects</Button>
          </ul>
        </Grid>
      </Grid>
      {Home && <HomePage />}
      {About && <AboutPage />}
      {Contact && <ContactPage />}
      {Cv && <ResumePage />}
      {Projects && <ProjectPage />}
    </div>
  );
}

export default App;
