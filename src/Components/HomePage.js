import logo02 from "../images/logo02.png";
import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Email ID is copied to your clipboard");

export default function HomePage() {
  const copyToClipboard = () => {
    copy("chiragmandyal82@gmail.com");
    notify();
  };
  return (
    <div className="main-about">
      <div>
        <img src={logo02} alt="React Image" />
      </div>
      <div style={{ marginLeft: "10%" }}>
        <p>Hi , i'm</p>
        <h1>Chirag Mandyal</h1>
        <h1>Front-End Developer</h1>
        <p>
          Enthusiastic and motivated self-learning in information Technology.
          intrusted in exploring about Web Development. Now i am looking for
          more experience in my field.
        </p>
        <Button sx={{ color: "white" }} onClick={() => copyToClipboard()}>
          <MailIcon sx={{ fontSize: "4vh", paddingInline: "10px" }} />
        </Button>
        <a href="https://github.com/WhySoOpKratos">
          <Button sx={{ color: "white" }}>
            <GitHubIcon sx={{ fontSize: "4vh", paddingInline: "10px" }} />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/chirag-mandyal-543575152/">
          <Button sx={{ color: "white" }}>
            <LinkedInIcon sx={{ fontSize: "4vh", paddingInline: "10px" }} />
          </Button>
        </a>
      </div>
      <Toaster />
    </div>
  );
}
