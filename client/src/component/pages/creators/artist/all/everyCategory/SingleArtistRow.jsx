import { Box, Grid, Stack } from "@mui/material";
import React, { Fragment } from "react";
import Artist from "./Artist";

const SingleArtistRow = ({ artistsInfo, title }) => {
  return (
    artistsInfo !== null &&
    artistsInfo.length !== 0 && (
      <Fragment>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box
            sx={{
              height: "400px",
              width: "100px",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="ripple"
          >
            {title}
          </Box>
          {/* direction={{ xs: "column", md: "row" }} sx={{ m: 1 }}*/}
          {/* spacing={2} */}
          {/* <Box sx={{ display: "flex", flexDirection: "row" }}> */}
          <Grid container spacing={2}>
            {artistsInfo.map(
              (artist, i) => i < 4 && <Artist artist={artist} />
            )}
          </Grid>
        </Box>
      </Fragment>
    )
  );
};

export default SingleArtistRow;
