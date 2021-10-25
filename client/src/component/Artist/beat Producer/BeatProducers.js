import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HorizontalScroll from "./../../common/HorizontalScroll";
import { actions } from "../../../state/actions";
const BeatProducers = () => {
  const artistType = "beatProducer";
  const titles = ["OG"];
  const dispatch = useDispatch();
  dispatch(actions.currentArtistType("beatProducers"));
  const artists = useSelector((state) => state.artist.artists);

  useEffect(() => {
    try {
      dispatch(actions.artistsInfo(artistType, titles));
    } catch (error) {
      console.log("error is " + error.message);
    }
  }, []);
  return (
    <div>
      Beat Producers
      {artists !== null &&
        artists.map((horizontalScroll, i) => (
          <HorizontalScroll
            horizontalScroll={horizontalScroll}
            title={titles[i]}
          ></HorizontalScroll>
        ))}
    </div>
  );
};

export default BeatProducers;
