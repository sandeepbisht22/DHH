import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

import React, { useEffect } from "react";
import SocialLinks from "./SocialLinks";

const ReactionChannels = () => {
  let channelData = null;
  useEffect(async () => {
    const res = await axios.get("/reactionchannel/all");
    channelData = res.data;
  }, []);

  return (
    channelData !== null &&
    channelData.map((currChannel) => (
      <div className="container">
        <Card sx={{ maxWidth: 345 }}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <SocialLinks linksData={currChannel.links} />
          </CardActions>
        </Card>
      </div>
    ))
  );
};

export default ReactionChannels;
