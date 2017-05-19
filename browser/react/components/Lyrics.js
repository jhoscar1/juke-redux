import React from 'react';

export default function ({lyric, setArtist, artistQuery, setSong, songQuery, handleSubmit}){

    const artistChange = e => {
    setArtist(e.target.value);
  };

  const songChange = e => {
    setSong(e.target.value);
  };

  return (
    <div id = "lyrics">
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="artistSearch"> Search Artists </label>
        <input value={artistQuery} name="artistSearch" type="text" onChange={artistChange} />
        <label htmlFor="songSearch"> Search Songs </label>
        <input value={songQuery} name="songSearch" type="text" onChange={songChange} />
        <pre>
          {lyric || 'Search above!'}
        </pre>
        <button type="submit"> The Big Button </button>
      </form>
    </div>
  )
}
