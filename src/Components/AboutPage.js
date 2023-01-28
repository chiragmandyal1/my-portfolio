import * as React from "react";
import logo03 from "../images/logo03.svg";
import logo04 from "../images/logo04.svg";
import logo05 from "../images/logo05.png";
import logo06 from "../images/logo06.svg";
import JavascriptIcon from "@mui/icons-material/Javascript";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

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
              style={{ color: "white", width: "33%" }}
            />
            <Tab
              label="Experiance"
              value="2"
              style={{ color: "white", width: "33%" }}
            />
            <Tab
              label="Technologies"
              value="3"
              style={{ color: "white", width: "33%" }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={eduValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleEduChange}>
                  <Tab
                    label="Collage"
                    value="1"
                    style={{ color: "white", width: "33%" }}
                  />
                </TabList>
              </Box>
              <TabPanel
                value="1"
                style={{
                  backgroundColor: "white",
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
                    label="InternShip"
                    value="1"
                    style={{ color: "white", width: "33%" }}
                  />
                  <Tab
                    label="Job"
                    value="2"
                    style={{ color: "white", width: "33%" }}
                  />
                </TabList>
              </Box>
              <TabPanel
                value="1"
                style={{
                  backgroundColor: "white",
                  color: "#1662AE",
                  fontSize: "3vh",
                  fontWeight: "bolder",
                  padding: "2vh",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
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
              </TabPanel>
              <TabPanel
                value="2"
                style={{
                  backgroundColor: "white",
                  color: "#1662AE",
                  fontSize: "3vh",
                  fontWeight: "bolder",
                  padding: "2vh",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
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
            <br />
            <JavascriptIcon sx={{ fontSize: "10vh" }} label="JavaScript" />
            <br />
            Java Script
            <br />
            <img
              src={logo06}
              alt="image"
              style={{ width: "6vh", marginTop: "3vh" }}
            />
            <br />
            ReactJs
            <br />
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
