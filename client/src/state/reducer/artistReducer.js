import {
  ARTIST_TYPE,
  ARTISTS_INFO,
  CURRENT_ARTIST,
  ARTIST_UNLIKED,
  ARTIST_LIKED,
  CURR_CATEGORY_ARTIST_INFO,
  SET_LOADING,
} from "../types";

const initialState = {
  artists: null,
  currArtist: null,
  currCategoryArtistInfo: null,
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
    case ARTISTS_INFO: {
      return {
        ...state,
        loading: false,
        artists: action.payload,
      };
    }
    case CURRENT_ARTIST: {
      return {
        ...state,
        loading: false,
        currArtist: action.payload,
      };
    }
    case ARTIST_LIKED:
      const likedVal = action.payload.action === "inc" ? 1 : -1;
      return {
        ...state,
        currArtist: {
          ...state.currArtist,
          loading: false,
          like: state.currArtist.like + likedVal,
        },
        artists: state.artists.map((artist) =>
          artist._id === action.payload.id
            ? {
                ...artist,
                like: artist.like + likedVal,
              }
            : artist
        ),
      };
    case ARTIST_UNLIKED:
      const unLikedVal = action.payload.action === "inc" ? 1 : -1;

      return {
        ...state,
        currArtist: {
          ...state.currArtist,
          loading: false,
          unLike: state.currArtist.unLike + unLikedVal,
        },
        artists: state.artists.map((artist) =>
          artist._id === action.payload.id
            ? {
                ...artist,
                unLike: artist.unLike + unLikedVal,
              }
            : artist
        ),
      };
    case CURR_CATEGORY_ARTIST_INFO:
      return {
        ...state,
        loading: false,
        currCategoryArtistInfo: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
