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
import Spinner from "../../../common/Spinner";

const NewsChannels = () => {
  const [channelData, setChannelData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get("/promoter/news/all");
    setChannelData(res.data);
    setLoading(false);
  }, []);

  if (loading) {
    return <Spinner></Spinner>;
  } else
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
                        require(`../../../../resources/promoters/all/${currChannel.profileImage}`)
                          .default
                      }
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {currChannel.originalName}
                      </Typography>
                      {/* <Typography variant="body2" color="text.secondary">
                      Work Queries : @{currChannel.workemail}
                    </Typography> */}
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

export default NewsChannels;
