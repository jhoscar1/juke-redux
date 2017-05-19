import { SET_LYRICS, SET_ARTIST, SET_SONG } from '../constants';
import axios from 'axios';

export const setLyrics = (text) => {
    return {
        type: SET_LYRICS,
        lyric: text
    }
}

export const selectSong = (song) => {
    return {
        type: SELECT_SONG,
        currentSong: song
    }
}


export const fetchLyrics = function (artist, song) {
  return function (dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};

export const fetchAlbumsFromServer =() => {
  return dispatch => {
    axios.get('/api/albums')
      .then(res => res.data)
      //.then(albums => dispatch(receivedAlbumsFromServer(albums)));
  }
}
export const playSong = songId => {
  return dispatch => {
    audio.play()
    dispatch(selectSong(songId));
  }
}
