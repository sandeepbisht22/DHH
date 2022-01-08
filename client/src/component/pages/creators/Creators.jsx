import React, { Fragment } from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import rapperLogo from "../../../resources/creators/rapper.png";
import directorLogo from "../../../resources/creators/director3 (1).png";
import beatProducerLogo from "../../../resources/creators/beatProducer2.png";
import mixMasteringLogo from "../../../resources/creators/mixMaster2 (1).png";
import { useNavigate } from "react-router-dom";
import { Item } from "../../common/Items";
import { Route } from "react-router-dom";
import Artists from "./artist/all/Artists";

export const CreatorRoutes = (
  <Route exact path="/creators/rappers" component={Artists}></Route>
  // <Route
  //   exact
  //   path="/creator/beatProducers"
  //   component={BeatProducers}
  // ></Route>
);
const Creators = () => {
  const navigate = useNavigate();
  return (
    <div className="container creatorgrid" style={{}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Item
            sx={{ background: "linear-gradient(to left, #403A3E , #BE5869)" }}
          >
            <Avatar
              className="ripple"
              alt="Remy Sharp"
              src={rapperLogo}
              onClick={() =>
                setTimeout(() => navigate("/creators/rappers"), 1000)
              }
              sx={{ m: "auto", width: 200, height: 200 }}
            />
            <Typography variant="subtitle1">Rappers</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item
            sx={{ background: "linear-gradient(to left, #403A3E , #BE5869)" }}
          >
            <Avatar
              className="ripple"
              alt="Remy Sharp"
              src={directorLogo}
              onClick={() => setTimeout(() => navigate("director"), 1000)}
              sx={{ m: "auto", width: 200, height: 200 }}
            />
            <Typography variant="subtitle1">Directors</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item
            sx={{ background: "linear-gradient(to left, #403A3E , #BE5869)" }}
          >
            <Avatar
              className="ripple"
              alt="Remy Sharp"
              src={beatProducerLogo}
              onClick={() =>
                setTimeout(() => navigate("/creators/beatProducers"), 1000)
              }
              sx={{ m: "auto", width: 200, height: 200 }}
            />
            <Typography variant="subtitle1">Beat Producers</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item
            sx={{ background: "linear-gradient(to left, #403A3E , #BE5869)" }}
          >
            <Avatar
              className="ripple"
              onClick={() => setTimeout(() => navigate("mixmasters"), 1000)}
              alt="Remy Sharp"
              src={mixMasteringLogo}
              sx={{ m: "auto", width: 200, height: 200 }}
            />
            <Typography variant="subtitle1">Mix Masters</Typography>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Creators;
