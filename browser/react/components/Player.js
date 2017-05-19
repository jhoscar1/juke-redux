import React from 'react';
import { toggle, prev, next } from '../action-creators/player';
import store from '../store';

const Player = (props) => {

  const currentSong = store.getState().player.currentSong;
  const currentSongList = store.getState().player.currentSongList;
  const isPlaying = store.getState().player.isPlaying;
  const progress = store.getState().player.progress;

  return (
    <footer>
      <div style={!currentSong.id ? {display: 'none'} : null}>
        <div className="pull-left">
          <button className="btn btn-default" onClick={() => store.dispatch(prev())}>
            <span className="glyphicon glyphicon-step-backward"></span>
          </button>
          <button className="btn btn-default" onClick={() => store.dispatch(toggle())}>
            <span className={isPlaying ? 'glyphicon glyphicon-pause' : 'glyphicon glyphicon-play'}></span>
          </button>
          <button className="btn btn-default" onClick={ () => store.dispatch(next())}>
            <span className="glyphicon glyphicon-step-forward"></span>
          </button>
        </div>
        <div className="bar">
          <div className="progress">
            <div className="progress-bar" style={{width: `${progress * 100}%`}}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Player;
