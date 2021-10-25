import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import HorizontalScroll from "./../../common/HorizontalScroll";
import { actions } from "../../../state/actions";
const Rappers = () => {
  const artistType = "rappers";
  const dispatch = useDispatch();
  dispatch(actions.currentArtistType(artistType));
  const titles = ["OG", "Upcoming"];
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
      {artists !== null &&
        artists.map((horizontalScroll, i) => (
          <HorizontalScroll
            key={i}
            horizontalScroll={horizontalScroll}
            title={titles[i]}
          ></HorizontalScroll>
        ))}
    </div>
  );
};
export default Rappers;
