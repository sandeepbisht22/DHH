import { ARTIST_TYPE } from "../types";

export const currentArtistType = (artist) => async (dispatch) => {
  try {
    dispatch({
      type: ARTIST_TYPE,
      payload: artist,
    });
  } catch (error) {}
};
