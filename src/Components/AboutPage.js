import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import logo03 from "../images/logo03.svg";
import logo04 from "../images/logo04.svg";
import logo05 from "../images/logo05.png";
import logo06 from "../images/logo06.svg";
import nextJS from "../images/nextJs.png";
import JavascriptIcon from "@mui/icons-material/Javascript";
import gitlab from "../images/gitlab.svg";
import StarIcon from "@mui/icons-material/Star";

export default function AboutPage() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [eduValue, setEduValue] = React.useState("1");

  const handleEduChange = (event, newValue) => {
    setEduValue(newValue);
  };
  const [expValue, setExpValue] = React.useState("1");

  const handleExpChange = (event, newValue) => {
    setExpValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            sx={{
              marginLeft: "25%",
            }}
          >
            <Tab
              label="Education"
              value="1"
              style={{ color: "white", width: "33%", textTransform: "none" }}
            />
            <Tab
              label="Experience"
              value="2"
              style={{ color: "white", width: "33%", textTransform: "none" }}
            />
            <Tab
              label="Skills"
              value="3"
              style={{ color: "white", width: "33%", textTransform: "none" }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={eduValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleEduChange}>
                  <Tab
                    label="College"
                    value="1"
                    style={{
                      color: "white",
                      width: "33%",
                      textTransform: "none",
                    }}
                  />
                </TabList>
              </Box>
              <TabPanel
                value="1"
                style={{
                  backgroundColor: "rgb(225 225 225)",
                  color: "#1662AE",
                  fontSize: "3vh",
                  fontWeight: "bolder",
                  padding: "2vh",
                }}
              >
                <a href="https://www.uudoon.in/">
                  <img src={logo04} alt="image" style={{ width: "20vh" }} />
                </a>
                <br />
                Uttaranchal University Dehradun
                <br />
                Course : B.Tech (2018-2022)
                <br />
                State: Uttarakhand
                <br />
                Branch:CSE
                <br />
                CGPA : 8.07
              </TabPanel>
            </TabContext>
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={expValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleExpChange}>
                  <Tab
                    label="Internship"
                    value="1"
                    style={{
                      color: "white",
                      width: "33%",
                      textTransform: "none",
                    }}
                  />
                  <Tab
                    label="Job"
                    value="2"
                    style={{
                      color: "white",
                      width: "33%",
                      textTransform: "none",
                    }}
                  />
                </TabList>
              </Box>
              <TabPanel
                value="1"
                style={{
                  backgroundColor: "rgb(225 225 225)",
                  color: "#1662AE",
                  fontSize: "3vh",
                  fontWeight: "bolder",
                  padding: "2vh",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgb(225 225 225)",
                    color: "#0D0B89",
                    fontSize: "3vh",
                    fontWeight: "bolder",
                    padding: "2vh",
                  }}
                >
                  <a href="https://crosscope.com/">
                    <img src={logo03} alt="image" />
                  </a>
                  <br />
                  Jan 2022 - Apr 2022 · (4 months )
                  <br />
                  Role : React Front-end Developer
                  <br />
                  About :-
                  <br />
                  During my internship, I worked on their ReactJS web
                  application and I was responsible for building end-to-end
                  functionality of the dashboard, login & logout page, Account
                  section, table etc. I was also responsible for integration
                  with the backend using RestAPIs.
                </div>
                <a
                  href="https://crosscope.com/"
                  style={{ textDecoration: "none", margin: "0" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      margin: "3vh",
                      maxWidth: "20vh",
                      maxHeight: "7vh",
                      fontWeight: "600",
                    }}
                  >
                    Company Website
                  </Button>
                </a>
              </TabPanel>
              <TabPanel
                value="2"
                style={{
                  backgroundColor: "rgb(225 225 225)",
                  color: "#1662AE",
                  fontSize: "3vh",
                  fontWeight: "bolder",
                  padding: "2vh",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgb(225 225 225)",
                    color: "#252525",
                    fontSize: "3vh",
                    fontWeight: "bolder",
                    padding: "2vh",
                  }}
                >
                  <img src={logo05} alt="image" style={{ width: "20vh" }} />
                  <br />
                  Sep 2022 - Dec 2022 · (4 months )
                  <br />
                  Role : JavaScript Developer
                  <br />
                  About :-
                  <br />
                  During my Job, I worked there as a JavaScript developer and my
                  work was to build Chrome extensions. I was responsible for the
                  end-to-end functionality of the extension like the UI the
                  background process and their whole working.
                </div>
                <a
                  href="https://prospectss.com/"
                  style={{ textDecoration: "none", margin: "0" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      margin: "3vh",
                      maxWidth: "20vh",
                      maxHeight: "7vh",
                      fontWeight: "600",
                    }}
                  >
                    Company Website
                  </Button>
                </a>
                <a
                  href="https://gitlab.com/chiragmandyal85/private/-/raw/main/Renovus_Enterprise_Experience_Letter_For_Chirag_Mandyal.pdf?inline=false"
                  style={{ textDecoration: "none", margin: "0" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      margin: "3vh",
                      maxWidth: "20vh",
                      maxHeight: "7vh",
                      fontWeight: "600",
                    }}
                  >
                    Experience Letter
                  </Button>
                </a>
              </TabPanel>
            </TabContext>
          </Box>
        </TabPanel>
        <TabPanel value="3">
          <div
            style={{
              display: " flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h1>Skills</h1>
            <p>Here are some of my skills</p>
            <div
              style={{
                display: " flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#202C33"
                // maxWidth="10%"
              >
                <JavascriptIcon
                  sx={{ fontSize: "12vh", margin: "0" }}
                  label="JavaScript"
                />
                <span>Java Script</span>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#202C33"
                // maxWidth="10%"
              >
                <img
                  src={logo06}
                  alt="image"
                  style={{
                    width: "8vh",
                    marginTop: "3vh",
                    marginBottom: "10px",
                  }}
                />
                <span>ReactJs</span>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#202C33"
                // maxWidth="10%"
              >
                <img
                  src={gitlab}
                  alt="image"
                  style={{
                    width: "8vh",
                    marginTop: "3vh",
                    marginBottom: "10px",
                  }}
                />
                <span>Git</span>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#202C33"
              >
                <img
                  src={nextJS}
                  alt="image"
                  style={{
                    width: "8vh",
                    marginTop: "3vh",
                    marginBottom: "10px",
                  }}
                />
                <span>NextJs</span>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Grid>
              </Grid>
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
