import { FAV_BEATPRODUCER, FAV_RAPPER, FAV_SONG, FAV_ADDED } from "../types";

const initialState = {
  favrapper: null,
  favbeatproducer: null,
  favsong: null,
  currartistchoiceinfo: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FAV_RAPPER:
      return {
        ...state,
        favrapper: action.payload,
      };
    case FAV_BEATPRODUCER:
      return {
        ...state,
        favbeatproducer: action.payload,
      };
    case FAV_SONG:
      return {
        ...state,
        favsong: action.payload,
      };
    case FAV_ADDED:
      return {
        ...state,
        [action.payload.choice]: {
          ...state[action.payload.choice],
          ...action.payload.value,
        },
      };
    default:
      return state;
  }
};
