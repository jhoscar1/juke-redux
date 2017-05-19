 import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST, SET_PROGRESS } from '../constants';
import AUDIO from '../audio';
import { skip } from '../utils';


export const startPlaying = () => {
    return {
        type: START_PLAYING,
    }
}

export const stopPlaying = () => {
    return {
        type: STOP_PLAYING,
    }
}

export const setCurrentSong = (currentSong) => ({
  type: SET_CURRENT_SONG,
  currentSong
});

export const setCurrentSongList = (currentSongList) => ({
  type: SET_LIST,
  currentSongList
});

export const setProgress = (progress) => ({
    type: SET_PROGRESS,
    progress
})

export const play = () => {
    return dispatch => {
        AUDIO.play();
        dispatch(startPlaying());
    }
}

export const pause = () => {
    return dispatch => {
        AUDIO.pause();
        dispatch(stopPlaying());
    }
}

export const load = (currentSong, currentSongList) => {
    return dispatch => {
        AUDIO.src = currentSong.audioUrl;
        AUDIO.load();
        dispatch(setCurrentSong(currentSong));
        dispatch(setCurrentSongList(currentSongList));
    }
    
}

export const toggle = () => {
    return (dispatch, getState) => {
        if (getState().player.isPlaying) dispatch(pause());
        else dispatch(play())
    }
}

export const startSong = (song, list) => {
    return dispatch => {
        dispatch(pause());
        dispatch(load(song, list));
        dispatch(play());
    }
}

export const toggleOne = (selectedSong, selectedSongList) => {
    return (dispatch, getState) => {
        if (selectedSong.id !== getState().player.currentSong.id) {
            dispatch(startSong(selectedSong, selectedSongList));
        }
        else {
            dispatch(toggle());
        }
    }
}

export const next = () => {
    return (dispatch, getState) => {
        dispatch(startSong(...skip(1, getState().player)))
    }
}

export const prev = () => {
    return (dispatch, getState) => {
        dispatch(startSong(...skip(-1, getState().player)))
    }
}