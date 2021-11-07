import axios from "axios";
import { FAV_RAPPER, FAV_BEATPRODUCER } from "../types";
export const favRapper = (rapperID) => async (dispatch) => {
  const favRapperInfo = await axios.get(`/userchoice/${rapperID}/favrapper`);
  dispatch({
    type: FAV_RAPPER,
    payload: favRapperInfo,
  });
};

export const favBeatProducer = (beatProducerID) => async (dispatch) => {
  const beatProducerInfo = await axios.get(
    `/userchoice/${beatProducerID}/favrapper`
  );
  dispatch({
    type: FAV_BEATPRODUCER,
    payload: beatProducerInfo,
  });
};
