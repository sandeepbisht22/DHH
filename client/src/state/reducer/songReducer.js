import { LIKE_SONG, ALL_SONG, SET_LOADING } from "./../types";

const initialState = {
  songList: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIKE_SONG:
      return {
        ...state,
        loading: false,
        songList: state.songList.map((song) =>
          song._id === action.payload.id ? action.payload.data : song
        ),
      };
    case ALL_SONG:
      return { ...state, loading: false, songList: action.payload };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
