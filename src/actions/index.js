import jsonPlaceholder from "../apis/jsonPlaceholder";

// Action creator
export const selectSong = (song) => {
  // Return action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
// <************** Start Redux-thunk practice here***************>

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("./posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
