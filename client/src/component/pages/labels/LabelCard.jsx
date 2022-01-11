import React from "react";
import SocialMedia from "../../common/SocialMedia";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
const styles = {
  relativeCardStyle: {
    position: "relative",
    background:
      "linear-gradient(0deg, rgba(255,253,249,1) 63%, rgba(34,193,195,1) 47%)",
  },
  formBoxStyle: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -30%)",
    bgcolor: "background.paper",
    boxShadow: "24",
    p: 4,

    backdropFilter: "blur(5px)",
  },
};
const LabelCard = ({ label }) => {
  return (
    <Card
      sx={{ maxWidth: 300, height: "320px" }}
      style={styles.relativeCardStyle}
    >
      <Typography height="100px" sx={{ m: 3 }}>
        {label.name}
      </Typography>
      <Box style={styles.formBoxStyle}>
        <Avatar
          sx={{ m: "auto", width: 100, height: 100 }}
          src={
            require(`../../../resources/promoters/all/${label.profileImage}`)
              .default
          }
        >
          Avatar
        </Avatar>
      </Box>
      <CardContent sx={{ mt: 2 }}>
        <Typography gutterBottom variant="h5" component="div">
          Owner : {label.owner}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Founded Year : {label.foundedYear.split("T")[0]}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Work Queries : @{label.workemail}
        </Typography> */}
      </CardContent>
      <CardActions sx={{ background: "black" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {label.sociallinks.map((socialaccount, i) => (
            <SocialMedia
              socialaccount={socialaccount}
              i={i}
              size={2}
            ></SocialMedia>
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};

export default LabelCard;
