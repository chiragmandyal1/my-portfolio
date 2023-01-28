import React from "react";
import logo2 from "../images/logo2.gif";
import { Grid } from "@mui/material";

export default function HomePage() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className="main-about"
    >
      <img src={logo2} alt="React Image" />
      <span>-- Chirag Mandyal</span>
      <p>Hello, my name's Chirag. i'm a Front-end Developer</p>
    </Grid>
  );
}
