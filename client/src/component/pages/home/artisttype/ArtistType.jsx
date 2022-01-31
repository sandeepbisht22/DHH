import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ArtistTypeCard from "./ArtistTypeCard";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  useEffect(async () => {
    const res = await axios.get("/label/all");
  }, []);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ArtistType = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Featured Artist" {...a11yProps(0)} />
          <Tab label="New Artist" {...a11yProps(1)} />
          <Tab label="Rising Artist" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* //Map */}
          <ArtistTypeCard />
          <ArrowCircleRightIcon sx={{ fontSize: "50px" }} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        New Artist
      </TabPanel>
      <TabPanel value={value} index={2}>
        Rising Artist
      </TabPanel>
    </Container>
  );
};

export default ArtistType;
