import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import { Item } from "./Items";

const SocialMedia = ({ socialaccount, i, size }) => {
  const socialMediaMap = {
    instagram: `fab fa-instagram-square fa-${size}x`,
    facebook: `fab fa-facebook-square fa-${size}x`,
    youtube: `fab fa-youtube-square fa-${size}x`,
    twitter: `fab fa-twitter-square fa-${size}x`,
    spotify: `fab fa-spotify fa-${size}x`,
    apple: `fab fa-apple fa-${size}x`,
  }; //will move this thing in database later
  const entries = Object.entries(socialaccount);

  const keyValue = entries[0][0];
  let className = null;
  Object.entries(socialMediaMap).map(([key, value]) => {
    if (key === keyValue) {
      className = value;
    }
  });
  const clickLink = entries[0][1];

  return (
    <Grid
      item
      xs={4}
      sm={4}
      md={2}
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {
        <a
          href={clickLink}
          className="col-md-1 p-2 text-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className={className} style={{ color: "white" }}></i>
        </a>
      }
    </Grid>
  );
};

export default SocialMedia;
