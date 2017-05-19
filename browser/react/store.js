import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware, loggerMiddleware)
  // other store enhancers if any
);

const store = createStore(
  combineReducers({
    lyrics: lyricsReducer,
    player: playerReducer
  }),
  enhancer);

export default store;
