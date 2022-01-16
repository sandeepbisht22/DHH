import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LoginGoogle from "./auth/LoginGoogle";
import { Item } from "./common/Items";
import PersonalLinks from "./common/PersonalLinks";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
  return (
    <Box
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={12} sm={3}>
          <Item
            sx={{ height: 200, width: 300 }}
            style={{
              "box-shadow": "0 15px 35px rgba(0,0,0,0.2)",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography variant="h5">Address</Typography>
            <div style={{ margin: "15px" }}>
              <Typography variant="h6">
                Bhagwanpur Jaisingh, Haldwani
              </Typography>
              <Typography variant="h6">263139</Typography>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Item
            sx={{ height: 200, width: 300 }}
            style={{
              "box-shadow": "0 15px 35px rgba(0,0,0,0.2)",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography variant="h5">City</Typography>
            <Typography variant="h3">Haldwani</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Item
            sx={{ height: 200, width: 300 }}
            style={{
              "box-shadow": "0 15px 35px rgba(0,0,0,0.2)",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography variant="h5">State</Typography>
            <Typography variant="h3">Uttarakhand</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Item
            sx={{ height: 200, width: 300 }}
            style={{
              "box-shadow": "0 15px 35px rgba(0,0,0,0.2)",
              margin: "auto",
            }}
          >
            <Typography variant="h5" sx={{ mb: 1 }}>
              Contact Details
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "70%",
              }}
            >
              <div>
                <LocalPhoneIcon sx={{ display: "inline-block", mr: 1 }} />
                <Typography
                  variant="subtitle2"
                  sx={{ display: "inline-block" }}
                >
                  +91-8937954780
                </Typography>
              </div>
              <div>
                <EmailIcon sx={{ display: "inline-block", mr: 1 }} />
                <Typography
                  variant="subtitle2"
                  sx={{ display: "inline-block" }}
                >
                  bishtsandy22@gmail.com
                </Typography>
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
