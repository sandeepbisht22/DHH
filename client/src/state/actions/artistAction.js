import { ARTIST_TYPE, ARTISTS_INFO, CURRENT_ARTIST } from "../types";
import axios from "axios";
export const currentArtistType = (artist) => async (dispatch) => {
  try {
    dispatch({
      type: ARTIST_TYPE,
      payload: artist,
    });
  } catch (error) {
    //TODO
  }
};

export const artistsInfo = (artistType, titles) => async (dispatch) => {
  try {
    console.log("Start executing calls inside for");
    axios
      .all(
        titles.map((title) => axios.get(`/artist/${artistType}/title/${title}`))
      )
      .then(
        axios.spread(function (...res) {
          // all requests are now complete
          console.log("final response is" + res);
          dispatch({
            type: ARTISTS_INFO,
            payload: res,
          });
        })
      );
  } catch (error) {
    console.log("Error is " + error);
  }
};

export const currentArtistInfo =
  (artistType, rapperName) => async (dispatch) => {
    try {
      const res = await axios.get(`/artist/${artistType}/name/${rapperName}`);
      dispatch({
        type: CURRENT_ARTIST,
        payload: res.data[0],
      });
    } catch (error) {
      //TODO
    }
  };
