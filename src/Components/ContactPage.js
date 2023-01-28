import React from "react";
import { Button, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import "./components.css";

export default function ContactPage() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className="main-about"
    >
      <h1>Contact</h1>
      <div className="contactIcons">
        <Button sx={{ color: "white" }}>
          <MailIcon sx={{ fontSize: "10vh", paddingInline: "10px" }} />
        </Button>
        <a href="https://github.com/WhySoOpKratos">
          <Button sx={{ color: "white" }}>
            <GitHubIcon sx={{ fontSize: "10vh", paddingInline: "10px" }} />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/chirag-mandyal-543575152/">
          <Button sx={{ color: "white" }}>
            <LinkedInIcon sx={{ fontSize: "10vh", paddingInline: "10px" }} />
          </Button>
        </a>
      </div>
    </Grid>
  );
}

// <img src={logo2} alt="React Image" />
