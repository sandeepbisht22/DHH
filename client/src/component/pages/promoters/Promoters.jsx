import { Avatar, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Item } from "../../common/Items";
import blogLogo from "../../../resources/promoters/blog.png";
import instagramLogo from "../../../resources/promoters/instagram.png";
import newsLogo from "../../../resources/promoters/news.png";
import YouTubeLogo from "../../../resources/promoters/YouTube.png";
import { useNavigate } from "react-router-dom";
import Director from "../creators/director/Director";
import { Route } from "react-router-dom";

export const PromoteRoutes = (
  <Fragment>
    <Route exact path="/promoter/channels" component={Director}></Route>
    <Route exact path="/promoter/channels" component={Director}></Route>
    <Route exact path="/promoter/channels" component={Director}></Route>
    <Route exact path="/promoter/channels" component={Director}></Route>
  </Fragment>
);
const Promoters = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container creatorgrid"
      style={{
        background: "rgb(255,255,255)",
        // background:
        //   "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,97,1) 45%, rgba(255,85,0,1) 100%)",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Item
            sx={{
              background: "#8ae9b3",
              background: "linear-gradient(315deg, #8ae9b3 0%, #c8d6e5 74%)",
            }}
          >
            <Avatar
              className="ripple"
              alt="Remy Sharp"
              src={YouTubeLogo}
              onClick={() =>
                setTimeout(() => navigate("reactionchannels"), 1000)
              }
              sx={{ m: "auto", width: 200, height: 200 }}
            />
            <Typography variant="subtitle1">Reaction Channels</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item
            sx={{
              background: "#8ae9b3",
              background: "linear-gradient(315deg, #8ae9b3 0%, #c8d6e5 74%)",
            }}
          >
            <Avatar
              className="ripple"
              alt="Remy Sharp"
              src={instagramLogo}
              onClick={() => setTimeout(() => navigate("instagrampages"), 1000)}
              sx={{ m: "auto", width: 200, height: 200 }}
            />
            <Typography variant="subtitle1">Instagram Pages</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item
            sx={{
              background: "#8ae9b3",
              background: "linear-gradient(315deg, #8ae9b3 0%, #c8d6e5 74%)",
            }}
          >
            <Avatar
              className="ripple"
              alt="Remy Sharp"
              src={newsLogo}
              onClick={() => setTimeout(() => navigate("newschannels"), 1000)}
              sx={{ m: "auto", width: 200, height: 200 }}
            />
            <Typography variant="subtitle1">Youtube News Channels</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item
            sx={{
              background: "#8ae9b3",
              background: "linear-gradient(315deg, #8ae9b3 0%, #c8d6e5 74%)",
            }}
          >
            <Avatar
              className="ripple"
              onClick={() => setTimeout(() => navigate("app"), 1000)}
              alt="Remy Sharp"
              src={blogLogo}
              sx={{ m: "auto", width: 200, height: 200 }}
            />
            <Typography variant="subtitle1">Blogs</Typography>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Promoters;
