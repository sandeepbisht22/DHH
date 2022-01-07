import { Avatar, Box } from "@mui/material";
import React, { Fragment } from "react";

const SocialLinks = ({ linksData }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {linksData.map((links) => (
        <Box>
          <Avatar
            className="ripple"
            alt="Remy Sharp"
            src={"//"}
            href={links}
            // onClick={() => setTimeout(() => navigate("newschannels"), 1000)}
          />
        </Box>
      ))}
    </Box>
  );
};

export default SocialLinks;
