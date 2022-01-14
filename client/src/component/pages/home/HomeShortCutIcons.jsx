import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import rapperLogo from "../../../resources/creators/rapper.png";
import directorLogo from "../../../resources/creators/director3 (1).png";
import beatProducerLogo from "../../../resources/creators/beatProducer2.png";
import mixMasteringLogo from "../../../resources/creators/mixMaster2 (1).png";
import blogLogo from "../../../resources/promoters/blog.png";
import instagramLogo from "../../../resources/promoters/instagram.png";
import newsLogo from "../../../resources/promoters/news.png";
import YouTubeLogo from "../../../resources/promoters/YouTube.png";
import { useNavigate } from "react-router-dom";
const HomeShortCutIcons = () => {
  const navigate = useNavigate();
  return (
    <div className="m-4">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} onClick={() => navigate("/creators/rappers")}>
          <Avatar
            sx={{ width: 100, height: 100, m: "auto" }}
            src={rapperLogo}
          />

          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Rapper
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          onClick={() => navigate("/creators/beatProducers")}
        >
          <Avatar
            sx={{ width: 100, height: 100, m: "auto" }}
            src={beatProducerLogo}
          />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Beat Producer
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          onClick={() => navigate("creators/mixmasters")}
        >
          <Avatar
            sx={{ width: 100, height: 100, m: "auto" }}
            src={mixMasteringLogo}
          />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Mix - Masters
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} onClick={() => navigate("creators/director")}>
          <Avatar
            sx={{ width: 100, height: 100, m: "auto" }}
            src={directorLogo}
          />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Directors
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          onClick={() => navigate("promoters/instagrampages")}
        >
          <Avatar
            sx={{ width: 100, height: 100, m: "auto" }}
            src={instagramLogo}
          />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Instagram Pages
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} onClick={() => navigate("promoters/blogs")}>
          <Avatar sx={{ width: 100, height: 100, m: "auto" }} src={blogLogo} />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Blogs
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          onClick={() => navigate("promoters/reactionchannels")}
        >
          <Avatar
            sx={{ width: 100, height: 100, m: "auto" }}
            src={YouTubeLogo}
          />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Reaction Channels
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          onClick={() => navigate("promoters/newschannels")}
        >
          <Avatar sx={{ width: 100, height: 100, m: "auto" }} src={newsLogo} />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            News Channels
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeShortCutIcons;
