import React from "react";

import { Avatar, Stack } from "@mui/material";
import { deepOrange, green, red } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { artistActions } from "../../../../../state/actions";

const AvatarOptionList = ({
  currenttype,
  setCurrenttype,
  titles,
  artistType,
}) => {
  const dispatch = useDispatch();

  const backGroundColor = (title) => {
    return currenttype === title ? "red" : "#2e95bd";
  };
  return (
    <Stack
      direction={{ xs: "row", sm: "row", md: "column", lg: "column" }}
      spacing={2}
      sx={{ m: 1 }}
    >
      {titles.map((title) => (
        <Avatar
          className="ripple"
          onClick={() => {
            dispatch(artistActions.currCategoryArtistInfo(artistType, title));
            setCurrenttype(title);
          }}
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
