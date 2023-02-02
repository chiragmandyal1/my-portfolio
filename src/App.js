import "./App.css";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ProjectPage from "./Components/ProjectsPage";
import ResumePage from "./Components/ResumePage";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";

function App() {
  const [homeValue, setHomeValue] = React.useState("1");
  const handleHomeChange = (event, newValue) => {
    setHomeValue(newValue);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      className="app"
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={homeValue}>
            <Grid item className="main-navbar">
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className="mainHeader"
              >
                <Button disabled>
                  <AccountCircleIcon
                    sx={{ marginRight: "7px", fontSize: "3.5vh" }}
                  />
                  WhySoOpKratos
                </Button>
                <TabList onChange={handleHomeChange} className="tabList">
                  <Tab label="Home" value="1" />

                  <Tab label="About" value="2" />
                  <Tab label="Resume" value="3" />
                  <Tab label="Project" value="4" />
                </TabList>
              </Grid>
            </Grid>
            <TabPanel value="1">
              <HomePage />
            </TabPanel>
            <TabPanel value="2">
              <AboutPage />
            </TabPanel>
            <TabPanel value="3">
              <ResumePage />
            </TabPanel>
            <TabPanel value="4">
              <ProjectPage />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
      <div style={{ marginBottom: "10%" }}>
        <span>Copyright ©️ 2023 Chirag Mandyal. All Right Reserved</span>
      </div>
    </Grid>
  );
}

export default App;
