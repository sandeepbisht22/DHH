import { ARTIST_TYPE } from "../types";

const initialState = {
  artists: null,
  currArtist: null,
  artistType: null,
  loading: false,
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ARTIST_TYPE: {
      return {
        ...state,
        artistType: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
