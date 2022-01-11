import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Songs from "../../common/Songs";
import FavArtist from "../../common/FavArtist";
import { songAction, userChoiceAction } from "../../../state/actions";
import { Avatar, Box, Typography } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useNavigate } from "react-router-dom";
const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const songsList = useSelector((state) => state.song.songList);
  const favRapper = useSelector((state) => state.userChoice.favrapper);
  const favSong = useSelector((state) => state.userChoice.favsong);
  const favBeatProducer = useSelector(
    (state) => state.userChoice.favbeatproducer
  );

  const user = useSelector((state) => state.user.user);

  return (
    user !== null && (
      <div className="container-fluid page">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              style={{ display: "inline-block", color: "black" }}
            >
              Whats Poppin
            </Typography>
            <Typography
              variant="h2"
              sx={{ ml: 1 }}
              style={{ display: "inline-block", color: "#56799a" }}
            >
              {user.name}
            </Typography>
          </Box>
          <Box>
            Personal Details
            <ArrowCircleRightIcon
              sx={{ width: 80, height: 80 }}
              onClick={() => {
                navigate("/user/edit");
              }}
            />
          </Box>
        </Box>

        <div className="row">
          <div className="col-md-12 ">
            <div>
              <div>
                <FavArtist
                  favArtist={favRapper}
                  title="Favourite Rapper"
                ></FavArtist>
              </div>
              <div>
                <FavArtist
                  favArtist={favBeatProducer}
                  title="Favourite Beat Producer"
                ></FavArtist>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Favourite Songs</h3>
          <div className="scroll">
            <div
              className="row flex-row flex-nowrap "
              style={{ height: "35vh" }}
            >
              <Songs songsList={favSong}></Songs>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default User;
