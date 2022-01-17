import React, { useEffect, useState, useRef } from "react";
import SocialMedia from "../../../common/SocialMedia";
import YoutubeVideo from "../../../common/YoutubeVideo";
import { artistActions, userChoiceAction } from "../../../../state/actions";
import { useSelector, useDispatch } from "react-redux";
import Songs from "../../../common/Songs";
import axios from "axios";
import setAuthToken from "../../../../utils/setAuthnToken";
import { favRappers } from "../../../../state/actions/userChoiceAction";
import LoginSignUpModal from "../../../common/LoginSignUpModal";
import { Box, Grid, Typography } from "@mui/material";
import { Item } from "../../../common/Items";

const Rapper = ({ match }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const artistType = useSelector((state) => state.artist.artistType);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const favRappers = useSelector((state) => state.userChoice.favrapper);
  const currArtist = useSelector((state) => state.artist.currArtist);
  let isFav = {};
  isFav.length = 0;
  if (favRappers !== null && currArtist !== null) {
    isFav = favRappers.filter((rapper) => rapper.name === currArtist.name);
  }

  const [artistFavouriteIconClass, setArtistFavouriteIconClass] = useState(
    isFav.length > 0 ? "fas fa-heart fa-3x" : "far fa-heart fa-3x"
  );

  const artistFavourite = (e) => {
    if (artistFavouriteIconClass === "far fa-heart fa-3x") {
      dispatch(userChoiceAction.addFav("favrapper", currArtist._id));
      setArtistFavouriteIconClass("fas fa-heart fa-3x");
    } else {
      dispatch(userChoiceAction.removeFav("favrapper", currArtist._id));
      setArtistFavouriteIconClass("far fa-heart fa-3x");
    }
  };

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  async function likeArtist(config, addRemove) {
    setAuthToken(localStorage.token);
    await axios.post(
      `/userchoice/likedartist/likedrapper/${addRemove}/${currArtist._id}`,
      null,
      config
    );
  }

  async function disLikedArtist(config, addRemove) {
    setAuthToken(localStorage.token);
    await axios.post(
      `/userchoice/dislikedartist/dislikedrapper/${addRemove}/${currArtist._id}`,
      null,
      config
    );
  }
  function setLocalState(like, dislike) {
    setDisliked(dislike);
    setLiked(like);
  }
  function dbUpdate(currentAction, action) {
    const likeUnlikeInfo = {
      id: currArtist._id,
      action: action,
    };

    dispatch(
      artistActions.likeUnLikeArtist("rappers", likeUnlikeInfo, currentAction)
    );
  }
  function artistLikedUnliked(currentAction) {
    const config = {
      header: {
        "content-type": "application/json",
      },
    };
    if (
      (currentAction === "like" && liked) ||
      (currentAction === "unLike" && disliked)
    ) {
      return;
    } else if (currentAction === "like" && disliked) {
      setLocalState(true, false);
      disLikedArtist(config, "remove");
      likeArtist(config, "add");
      dbUpdate("like", "inc");
      dbUpdate("unLike", "dec");
      //remove from disliked list and add to liked list backend
    } else if (currentAction === "unLike" && liked) {
      setLocalState(false, true);
      disLikedArtist(config, "add");
      likeArtist(config, "remove");
      dbUpdate("like", "dec");
      dbUpdate("unLike", "inc");
      //remove from liked list and add to disliked list backend
    } else if (currentAction === "like") {
      setLocalState(true, false);
      likeArtist(config, "add");
      dbUpdate("like", "inc");
    } else if (currentAction === "unLike") {
      setLocalState(false, true);
      disLikedArtist(config, "add");
      dbUpdate("unLike", "inc");
    }
  }
  // const songUpdate = useRef(false);
  // if (!songUpdate.current) {
  //   dispatch(songAction.allArtistSongs(artistType, currArtist._id));
  //   songUpdate.current = true;
  // }
  useEffect(async () => {
    try {
      setAuthToken(localStorage.token);
      const disLikedCheck = await axios.get(
        `/userchoice/likecheck/dislikedrapper/${currArtist._id}`
      );
      setDisliked(disLikedCheck.data.res === "true");

      const likedCheck = await axios.get(
        `/userchoice/likecheck/likedrapper/${currArtist._id}`
      );
      setLiked(likedCheck.data.res === "true");
    } catch (error) {}
  }, []);

  return (
    currArtist !== null && (
      <div style={{ backgroundColor: "#" }}>
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item xs={12} sm={3}>
            <Item>
              <img
                style={{
                  height: "400px",
                  width: "300px",
                }}
                className="border border-5 border-white"
                src={
                  require(`../../../../resources/artist/images/page/${currArtist.profileImage}`)
                    .default
                }
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Item className="minAboutTextBoxHeight" sx={{ m: 1 }}>
              <h1 style={{ color: "#56799a" }}>
                {currArtist.name} - The [{currArtist.title} ]of DHH
              </h1>
              <Typography variant="subtitle1" className="text-start">
                {currArtist.about}
              </Typography>
              <div style={{ color: "#" }}></div>
            </Item>
            <Item className="position-relative" style={{ minHeight: "50px" }}>
              <div className="position-absolute bottom-0 container">
                <div
                  style={{ color: "#" }}
                  className="d-flex justify-content-evenly"
                >
                  <div>
                    <i
                      onClick={() =>
                        isAuthenticated !== null || isAuthenticated != ""
                          ? handleOpen()
                          : artistLikedUnliked("like")
                      }
                      className="fas fa-microphone fa-3x"
                    ></i>
                    <span className="ps-3">{currArtist.like}</span>
                  </div>
                  <div>
                    <i
                      onClick={() =>
                        isAuthenticated !== null || isAuthenticated != ""
                          ? handleOpen()
                          : artistFavourite
                      }
                      className={artistFavouriteIconClass}
                    ></i>
                  </div>
                  <div>
                    <i
                      onClick={() =>
                        isAuthenticated !== null || isAuthenticated != ""
                          ? handleOpen()
                          : artistLikedUnliked("unLike")
                      }
                      className="fas fa-microphone-slash fa-3x"
                    ></i>
                    <span className="ps-3">{currArtist.unLike}</span>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className="container-fluid" style={{ margin: "0px" }}>
              <Typography
                variant="h3"
                className="text-center"
                sx={{ mb: 1, color: "#56799a" }}
              >
                Famous Bars
              </Typography>
              <div className="scroll">
                <div className="row flex-row flex-nowrap">
                  <Songs songsList={currArtist.songs}></Songs>
                  {/* <YoutubeVideo
                youtubeKey=""
                channelId="UCMXMp3Lc6v6v8dJH5ZGwtqA"
              ></YoutubeVideo> */}
                </div>
              </div>
            </div>
          </Grid>
          <Box style={{ width: "100%" }}>
            <Typography
              variant="h3"
              className="text-center"
              sx={{ mb: 1, color: "#56799a" }}
            >
              Social Links
            </Typography>
            <Grid
              container
              spacing={2}
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              {currArtist.sociallinks.map((socialaccount, i) => (
                <SocialMedia
                  socialaccount={socialaccount}
                  i={i}
                  size={5}
                ></SocialMedia>
              ))}
            </Grid>
          </Box>
        </Grid>
        <LoginSignUpModal open={open} handleClose={handleClose} />
      </div>
    )
  );
};
export default Rapper;
