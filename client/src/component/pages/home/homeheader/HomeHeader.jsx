import React, { Fragment } from "react";
import testImage from "../../../../resources/1867142@3x.png";
import testBoheImage from "../../../../resources/wp4560813-bohemia-hd-wallpapers-removebg-preview@3x.png";
import testLogo from "../../../../resources/desi-hip-hop.c9b4564a (1)_2@3x.png";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import SendSuggestionSection from "./SendSuggestionSection";

const style = {
  position: "absolute",
  top: "62%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const HomeHeader = () => {
  return (
    <Fragment>
      <Box
        className="homeheadertop"
        style={{
          position: "relative",
          backgroundImage: `url(${testImage})`,
        }}
      >
        <Box
          style={{
            display: "inline-flex",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            style={{
              background: "black",
              width: "20vw",
            }}
          >
            <Box style={{ textAlign: "center" }} sx={{ pt: 3 }}>
              <img src={testLogo} style={{ zIndex: 1, width: "10vw" }} />
            </Box>

            <Box sx={style}>
              <img
                src={testBoheImage}
                className="style bohImage"
                style={{
                  width: "47vw",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          margin: "auto",
          position: "relative",
          top: "-3vw",
          width: "85vw",
          borderRadius: "2vw",
          background: "rgb(133 133 133)",
          zIndex: 3,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            style={{ textAlign: "center", padding: "2vw" }}
          >
            Search Your Artist/Song/Album
          </Typography>
        </Box>
        <Box>
          <SendSuggestionSection />
        </Box>
      </Box>
    </Fragment>
  );
};

export default HomeHeader;
