import axios from "axios";
import { FAV_RAPPER, FAV_BEATPRODUCER, FAV_SONG } from "../types";
export const favRappers = (userId) => async (dispatch) => {
  const favRapperInfo = await axios.get(`/userchoice/${userId}/favrapper`);
  dispatch({
    type: FAV_RAPPER,
    payload: favRapperInfo,
  });
};

export const favBeatProducers = (userId) => async (dispatch) => {
  const beatProducerInfo = await axios.get(
    `/userchoice/${userId}/favbeatproducer`
  );
  dispatch({
    type: FAV_BEATPRODUCER,
    payload: beatProducerInfo,
  });
};

export const favSongs = (userId) => async (dispatch) => {
  const favSongInfo = await axios.get(`/userchoice/${userId}/favsong`);
  dispatch({
    type: FAV_SONG,
    payload: favSongInfo,
  });
};
