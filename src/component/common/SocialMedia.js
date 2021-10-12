import React, { Fragment } from "react";

const SocialMedia = ({ socialaccount }) => {
  const socialMediaMap = [
    {
      instagram: "fab fa-instagram",
      facebook: "fab fa-facebook-square",
      youtube: "fab fa-youtube",
      twitter: "fab fa-twitter-square",
    },
  ]; //will move this thing in database later
  const entries = Object.entries(socialaccount);
  const key = entries[0][0];
  const value = entries[0][1];
  return (
    <Fragment>
      {
        <div>
          <i className={socialMediaMap[key]} onClick={value}></i>
          icons
        </div>
      }
    </Fragment>
  );
};

export default SocialMedia;
