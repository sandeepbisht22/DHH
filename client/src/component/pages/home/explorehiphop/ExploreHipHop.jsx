import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import rapperImage from "../../../../resources/HomeSlider/Rapper-bohemia.jpg";
import djImage from "../../../../resources/HomeSlider/nucleya-in-action.jpg";
import bboyImage from "../../../../resources/HomeSlider/bboying girl.jpg";
import beatBoxerImage from "../../../../resources/HomeSlider/Beatboxer-1.jpg";
import GrafImage from "../../../../resources/HomeSlider/Grafeti.jpg";
import DancerImage from "../../../../resources/HomeSlider/dancers.png";

const ExploreHipHop = () => {
  return (
    <Container>
      <Typography variant="h3">Explore Hip Hop</Typography>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={6} sm={4}>
          {/* Add on click functionality */}
          <div
            className="card"
            style={{ height: "140px", borderRadius: "14px" }}
          >
            <img
              className="card-img"
              src={rapperImage}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "14px",
                objectFit: "cover",
              }}
            />
            <div className="card-img-overlay overlay-grey text-white d-flex justify-content-center align-items-center">
              <h2>MC</h2>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={4}>
          <div
            className="card"
            style={{ height: "140px", borderRadius: "14px" }}
          >
            <img
              className="card-img"
              src={djImage}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "14px",
                objectFit: "cover",
              }}
            />
            <div className="card-img-overlay overlay-grey text-white d-flex justify-content-center align-items-center">
              <h2>DJing</h2>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={4}>
          <div
            className="card"
            style={{ height: "140px", borderRadius: "14px" }}
          >
            <img
              className="card-img"
              src={bboyImage}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "14px",
                objectFit: "cover",
              }}
            />
            <div className="card-img-overlay overlay-grey text-white d-flex justify-content-center align-items-center">
              <h2>B-Boying</h2>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={4}>
          <div
            className="card"
            style={{ height: "140px", borderRadius: "14px" }}
          >
            <img
              className="card-img"
              src={GrafImage}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "14px",
                objectFit: "cover",
              }}
            />
            <div className="card-img-overlay overlay-grey text-white d-flex justify-content-center align-items-center">
              <h2>Graffiti</h2>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={4}>
          <div
            className="card"
            style={{ height: "140px", borderRadius: "14px" }}
          >
            <img
              className="card-img"
              src={beatBoxerImage}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "14px",
                objectFit: "cover",
              }}
            />
            <div className="card-img-overlay overlay-grey text-white d-flex justify-content-center align-items-center">
              <h2>Beat-Boxing</h2>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={4}>
          <div
            className="card"
            style={{ height: "140px", borderRadius: "14px" }}
          >
            <img
              className="card-img"
              src={DancerImage}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "14px",
                objectFit: "cover",
              }}
            />
            <div className="card-img-overlay overlay-grey text-white d-flex justify-content-center align-items-center">
              <h2>Dancer</h2>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExploreHipHop;
