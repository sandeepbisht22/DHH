import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

import mainItemLogo from "../../../../resources/245539146_1076822449814460_2804094764416241140_n-removebg-preview@3x.png";
import mainItemBackgroundLogo from "../../../../resources/245539146_1076822449814460_2804094764416241140_n@3x.png";

const ArtistTypeCard = () => {
  return (
    <Card sx={{ maxWidth: 345, height: "65vh" }}>
      <div
        style={{
          backgroundImage: `url(${mainItemBackgroundLogo})`,
          backgroundSize: "cover",
          width: "100%",
          height: "56vh",
          objectFit: "contain",
        }}
      >
        <img
          src={mainItemLogo}
          style={{
            height: "60vh",
            width: "100%",
            position: "relative",
          }}
        />
      </div>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            my: 1,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Name</Typography>
            <Typography>Plays</Typography>
          </Box>
          <Box>
            <PlayCircleIcon sx={{ mr: 1 }} />
            <PlaylistAddIcon sx={{ mr: 1 }} />
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ArtistTypeCard;
