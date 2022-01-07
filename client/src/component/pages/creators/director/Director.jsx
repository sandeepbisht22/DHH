import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

import React, { Fragment, useEffect, useState } from "react";
import SocialMedia from "../../../common/SocialMedia";

const Director = () => {
  const [channelData, setChannelData] = useState([]);

  useEffect(async () => {
    const res = await axios.get("/promoter/blogs/all");
    setChannelData(res.data);
  }, []);
  return (
    channelData !== null && (
      <Fragment>
        <div className="container">
          <Grid container spacing={2}>
            {channelData.map((currChannel) => (
              <Grid item xs={12} sm={4}>
                <Card sx={{ maxWidth: 345 }} sx={{ m: "auto" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {currChannel.name}
                  </Typography>

                  <CardMedia
                    component="img"
                    height="340"
                    image={
                      require(`../../../../resources/promoters/youtube/${currChannel.profileImage}`)
                        .default
                    }
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {currChannel.orginalName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {currChannel.orginalName}
                    </Typography>
                  </CardContent>
                  <CardActions style={{ background: "black" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      {currChannel.sociallinks.map((socialaccount, i) => (
                        <SocialMedia
                          socialaccount={socialaccount}
                          i={i}
                          size={2}
                        ></SocialMedia>
                      ))}
                    </Box>
                    {/* <SocialLinks linksData={currChannel.sociallinks} /> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Fragment>
    )
  );
};

export default Director;
