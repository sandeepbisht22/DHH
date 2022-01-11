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
import { useNavigate } from "react-router";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useDispatch, useSelector } from "react-redux";
import { artistActions } from "../../../../../../state/actions";
const Artist = ({ artist }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const artistType = useSelector((state) => state.artist.artistType);

  return (
    <Grid item xs={12} sm={4} md={3}>
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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" color="text.secondary">
              {artist.originalName}
            </Typography>
            <ArrowCircleRightIcon
              onClick={() => {
                dispatch(
                  artistActions.currentArtistInfo(artistType, artist.name)
                );
                navigate(`/creators/rappers/${artist.name}`);
              }}
            />
          </Box>
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
