import logo02 from "../images/logo02.png";
import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const notify = (e) => {
  if (e == "email") {
    toast("Email ID is copied to your clipboard");
  } else {
    toast("PhoneNo. is copied to your clipboard");
  }
};

export default function HomePage() {
  const copyEmailToClipboard = () => {
    copy("chiragmandyal82@gmail.com");
    notify("email");
  };
  const copyPhoneToClipboard = () => {
    copy("8219600177");
    notify("phone");
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
          Enthusiastic and motivated self-learning in Information Technology,
          interested in exploring about Web Development. Currently i am looking
          to get more experience in my field.
        </p>

        <Button sx={{ color: "white" }} onClick={() => copyEmailToClipboard()}>
          <MailIcon sx={{ fontSize: "4vh", paddingInline: "10px" }} />
        </Button>
        <Button sx={{ color: "white" }} onClick={() => copyPhoneToClipboard()}>
          <PhoneIcon sx={{ fontSize: "4vh", paddingInline: "10px" }} />
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
        <a href="https://wa.me/9882724284">
          <Button sx={{ color: "white" }}>
            <WhatsAppIcon sx={{ fontSize: "4vh", paddingInline: "10px" }} />
          </Button>
        </a>
      </div>
      <Toaster />
    </div>
  );
}
