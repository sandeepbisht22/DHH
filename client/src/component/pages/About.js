import { Grid } from "@mui/material";
import React from "react";
import devProfile from "../../resources/images/me and the mountain call.JPG";
import PersonalLinks from "../common/PersonalLinks";
const About = () => {
  return (
    <div className="container-fluid">
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={12} sm={6}>
          <div
            className="  pb-5 my-5 d-flex justify-content-center align-items-center"
            style={{ borderColor: "black !important", height: "60vh" }}
          >
            <img
              src={devProfile}
              alt=""
              className="rounded-circle border border-3"
              style={{ height: "50vh", width: "53vh" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className=" my-5 pe-5">
            <h2
              style={{ backgroundColor: "#", color: "#61892F" }}
              className="p-2 border border-3 rounded ps-4"
            >
              About Me
            </h2>
            <p style={{ color: "#black" }} className="my-2 px-2">
              My name is Sandeep Bisht, Software Engineer by profession and very
              enthusiastic about Desi HIP HOP. Specially about the Desi Rap. Hip
              Hop is medium where one can freely express ourselve and that's the
              quality which made me clinched to it.
            </p>
            <h4
              className="p-2 border border-3 rounded ps-4 mt-5"
              style={{ backgroundColor: "#", color: "#61892F" }}
            >
              My Aim
            </h4>
            <p style={{ color: "black" }} className="my-2 px-2">
              I strongly believe that we can take DHH to the next level and it
              deserves to be taken to the next level. Our India has much more
              talent that can take over world they just need a platform, so its
              my attempt to provide them with one.
            </p>
          </div>
        </Grid>
      </Grid>
      <div className="row"></div>
      <div className="row py-1" style={{ backgroundColor: "black" }}>
        <PersonalLinks size={4} />
      </div>
    </div>
  );
};

export default About;
