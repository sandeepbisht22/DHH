import React, { useEffect, useState } from "react";
import SocialMedia from "./../../common/SocialMedia";
import YoutubeVideo from "../../common/YoutubeVideo";
import { artistActions, userChoiceAction } from "../../../state/actions";
import { useSelector, useDispatch } from "react-redux";
import Songs from "../../common/Songs";
import axios from "axios";
import { isLiked } from "./../../../state/actions/artistAction";

const Rapper = ({ match }) => {
  const dispatch = useDispatch();
  const artistType = useSelector((state) => state.artist.artistType);

  const [artistFavouriteIconClass, setArtistFavouriteIconClass] =
    useState("far fa-heart fa-3x");
  const currArtist = useSelector((state) => state.artist.currArtist);

  const artistFavourite = (e) => {
    dispatch(userChoiceAction.addFav("favrapper", currArtist._id));
    setArtistFavouriteIconClass(
      artistFavouriteIconClass === "far fa-heart fa-3x"
        ? "fas fa-heart fa-3x"
        : "far fa-heart fa-3x"
    );
  };

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  function artistLikedUnliked(currentAction) {
    if (
      (currentAction === "like" && liked) ||
      (currentAction === "unLike" && disliked)
    ) {
      return;
    } else if (currentAction === "like" && disliked) {
      const config = {
        header: {
          "content-type": "application/json",
        },
      };
      setDisliked(false);
      axios.post(
        `/userchoice/dislikedartist/remove/${currArtist._id}`,
        null,
        config
      );
      setLiked(true);
      axios.post(`/userchoice/likedartist/add/${currArtist._id}`, null, config);

      //remove from disliked list and add to liked list backend
    } else if (currentAction === "unLike" && liked) {
      const config = {
        header: {
          "content-type": "application/json",
        },
      };
      setLiked(false);
      axios.post(
        `/userchoice/likedartist/remove/${currArtist._id}`,
        null,
        config
      );
      setDisliked(true);
      axios.post(
        `/userchoice/dislikedartist/add/${currArtist._id}`,
        null,
        config
      );

      //remove from liked list and add to disliked list backend
    }
    const likeUnlikeInfo = {
      id: currArtist._id,
      action: "inc",
    };
    dispatch(
      artistActions.likeUnLikeArtist("rappers", likeUnlikeInfo, currentAction)
    );
  }

  useEffect(async () => {
    try {
      const disLikedCheck = await axios.get(
        `/userchoice/isdisliked/${currArtist._id}`
      );
      setDisliked(disLikedCheck);

      const likedCheck = await axios.get(
        `/userchoice/isliked/${currArtist._id}`
      );
      setLiked(likedCheck);

      dispatch(
        artistActions.currentArtistInfo(artistType, match.params.rapper)
      );
    } catch (error) {}
  }, [match.params.rapper]);

  return (
    currArtist !== null && (
      <div style={{ backgroundColor: "#272727" }}>
        <div className="d-inline-flex flex-row">
          <div className="pe-3 pb-3 ps-3">
            <img
              style={{
                height: "400px",
                width: "300px",
              }}
              className="border border-5 border-white"
              src={
                require(`../../../resources/artist/images/page/${currArtist.profileImage}`)
                  .default
              }
            />
          </div>
          <div className="position-relative">
            <h1 style={{ color: "#61892F" }}>
              {currArtist.name} - The [{currArtist.title} ]of DHH
            </h1>
            <div style={{ color: "#FFFFFF" }}>{currArtist.about}</div>
            <div className="position-absolute bottom-0 container">
              <div
                style={{ color: "#FFFFFF" }}
                className="d-flex justify-content-evenly"
              >
                <div>
                  <i
                    onClick={() => artistLikedUnliked("like")}
                    className="fas fa-microphone fa-3x"
                  ></i>
                  <span className="ps-3">{currArtist.like}</span>
                </div>
                <div>
                  <i
                    onClick={artistFavourite}
                    className={artistFavouriteIconClass}
                  ></i>
                </div>
                <div>
                  <i
                    onClick={() => artistLikedUnliked("unLike")}
                    className="fas fa-microphone-slash fa-3x"
                  ></i>
                  <span className="ps-3">{currArtist.unLike}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ margin: "0px" }}>
          <h3 style={{ color: "#61892F" }}>Famous Bars</h3>
          <div className="scroll">
            <div className="row flex-row flex-nowrap">
              <Songs songsList={currArtist.songs}></Songs>
              {/* <YoutubeVideo
                youtubeKey="AIzaSyB47-Z2ZklkZUzSVKohYBoazrKVqM3ddxc"
                channelId="UCMXMp3Lc6v6v8dJH5ZGwtqA"
              ></YoutubeVideo> */}
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <h3 style={{ color: "#61892F" }} className="text-center">
            Social Links
          </h3>
          <div className="container-fluid">
            <div className="row justify-content-md-center">
              {currArtist.sociallinks.map((socialaccount, i) => (
                <SocialMedia socialaccount={socialaccount} i={i}></SocialMedia>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Rapper;
