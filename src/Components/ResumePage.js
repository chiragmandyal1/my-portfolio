import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

export default function ResumePage() {
  return (
    <Grid container direction="column" alignItems="center" className="resume">
      <h1>Resume</h1>
      <div>
        <a
          href="https://github.com/WhySoOpKratos/Resume/archive/refs/heads/main.zip"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              margin: "3vh",
              maxWidth: "20vh",
              maxHeight: "7vh",
              backgroundColor: "white",
              color: "black",
              fontWeight: "600",
            }}
          >
            Tap to download Resume
          </Button>
        </a>
        <a
          href="https://github.com/WhySoOpKratos/Cover-Letter/archive/refs/heads/main.zip"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              margin: "3vh",
              maxWidth: "20vh",
              maxHeight: "7vh",
              backgroundColor: "white",
              color: "black",
              fontWeight: "600",
            }}
          >
            Tap to download Cover Leter
          </Button>
        </a>
      </div>
    </Grid>
  );
}
<a
  href="https://github.com/WhySoOpKratos/Documents/raw/main/Resume(Dec%2C2022).pdf+https://github.com/WhySoOpKratos/Documents/raw/main/Cover%20Letter%20ReactJs%20Developer.pdf"
  style={{ textDecoration: "none" }}
>
  <Button
    variant="contained"
    sx={{ margin: "3vh", maxWidth: "22vh", maxHeight: "7vh" }}
  >
    Tap to download Resume & Cover Letter
  </Button>
</a>;
