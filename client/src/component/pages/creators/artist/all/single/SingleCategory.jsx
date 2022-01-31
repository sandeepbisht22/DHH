import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../../../common/Spinner";
import Artist from "../everyCategory/Artist";

const SingleCategory = ({ artistType, title }) => {
  const currCategoryArtistInfo = useSelector(
    (state) => state.artist.currCategoryArtistInfo
  );
  const loading = useSelector((state) => state.artist.loading);

  if (loading) {
    return <Spinner></Spinner>;
  } else
    return (
      <Grid container spacing={2}>
        {currCategoryArtistInfo !== null &&
          currCategoryArtistInfo.map((artist) => <Artist artist={artist} />)}
      </Grid>
    );
};

export default SingleCategory;
