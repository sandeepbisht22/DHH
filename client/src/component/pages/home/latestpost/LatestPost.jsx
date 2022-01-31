import { Container, Typography } from "@mui/material";
import React from "react";
import LatestPostCard from "./LatestPostCard";

const LatestPost = () => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <Typography variant="h3">Latest Posts</Typography>
      <LatestPostCard />
    </Container>
  );
};

export default LatestPost;
