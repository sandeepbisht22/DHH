import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Artist from "../everyCategory/Artist";

const SingleCategory = ({ artistType, title }) => {
  const currCategoryArtistInfo = useSelector(
    (state) => state.artist.currCategoryArtistInfo
  );

  return (
    <Grid container spacing={2}>
      {currCategoryArtistInfo !== null &&
        currCategoryArtistInfo.map((artist) => <Artist artist={artist} />)}
    </Grid>
  );
};

export default SingleCategory;
