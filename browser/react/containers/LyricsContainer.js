import React, { Component } from 'react';
import store from '../store'
import Lyrics from '../components/Lyrics'
import { setLyrics, fetchLyrics } from '../action-creators/lyrics';
import axios from 'axios';

export default class LyricsContainer extends Component {

  constructor(props){
    super(props);
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState());

    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault()
      if (this.state.artistQuery && this.state.songQuery) {
    store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
    }
  }

  setArtist(artist){
    this.setState({artistQuery: artist})
  }

  setSong(song){
    this.setState({songQuery: song})
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    });

  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render(){
    return (
      <div>
        <Lyrics
          lyric={this.state.lyrics.lyric}
          setArtist={this.setArtist}
          setSong={this.setSong}
          artistQuery={this.state.artistQuery}
          songQuery={this.state.songQuery}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
