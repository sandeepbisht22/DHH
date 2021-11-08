import { FAV_BEATPRODUCER, FAV_RAPPER, FAV_SONG } from "../types";

const initialState = {
  favRapper: null,
  favBeatProducer: null,
  favSong: null,
  currArtistChoiceInfo: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FAV_RAPPER:
      return {
        ...state,
        favRapper: action.payload,
      };
    case FAV_BEATPRODUCER:
      return {
        ...state,
        favBeatProducer: action.payload,
      };
    case FAV_SONG:
      return {
        ...state,
        favSong: action.payload,
      };
    default:
      return state;
  }
};
