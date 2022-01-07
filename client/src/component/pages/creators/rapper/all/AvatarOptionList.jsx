import React from "react";

import { Avatar, Stack } from "@mui/material";
import { deepOrange, green, red } from "@mui/material/colors";

const AvatarOptionList = ({ currenttype, setCurrenttype, titles }) => {
  const backGroundColor = (title) => {
    return currenttype === title ? "red" : "#2e95bd";
  };
  return (
    <Stack direction="column" spacing={2} sx={{ m: 1 }}>
      {titles.map((title) => (
        <Avatar
          className="ripple"
          onClick={() => setCurrenttype(title)}
          sx={{
            m: "auto",
            width: 100,
            height: 100,
            bgcolor: backGroundColor(title),
          }}
        >
          {title}
        </Avatar>
      ))}
    </Stack>
  );
};

export default AvatarOptionList;
