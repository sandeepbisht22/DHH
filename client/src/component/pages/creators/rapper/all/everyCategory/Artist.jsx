import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
const Artist = ({ artist }) => {
  return (
    <Grid item xs={6} sm={3}>
      <Card className="multipleArtistDisplay" sx={{ m: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {artist.name}
        </Typography>

        <CardMedia
          component="img"
          height="300"
          image={
            require(`../../../../../..//resources/artist/images/profile/${artist.profileImage}`)
              .default
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {artist.orignalName}
          </Typography>
        </CardContent>
        <CardActions style={{ background: "black" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              height: "5px",
            }}
          >
            {/* //add buttob to open single page */}
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Artist;
