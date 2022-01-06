import { Avatar, Box } from "@mui/material";
import React, { Fragment } from "react";

const SocialLinks = ({ linksData }) => {
  let socailLinks = [];
  for (let i = 0; i < linksData.length; i++) {
    console.log("link data" + linksData[i]);
    socailLinks.push(
      <Box>
        <Avatar
          className="ripple"
          alt="Remy Sharp"
          //   src={linksData[i]}
          // onClick={() => setTimeout(() => navigate("newschannels"), 1000)}
        />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {socailLinks}
    </Box>
  );
};

export default SocialLinks;
