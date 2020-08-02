import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "AAA", duration: "2:02" },
    { title: "BBB", duration: "3:03" },
    { title: "CCC", duration: "4:05" },
    { title: "DDD", duration: "5:10" },
    { title: "EEE", duration: "6:15" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
