import { SET_LYRICS, SET_ARTIST, SET_SONG } from '../constants';

const initialState = {  lyric: '',
                        artistQuery: '',
                        songQuery: '' };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LYRICS:
            return Object.assign({}, state, { lyric: action.lyric })
        case SET_ARTIST:
            return Object.assign({}, state, { artistQuery: action.artist })
        case SET_SONG:
            return Object.assign({}, state, { songQuery: action.song })
        default:
            return state;
    }
}

export default reducer;
