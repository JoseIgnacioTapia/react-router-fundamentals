import React from 'react';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';
import Message from './Message';

const SongDetails = ({ search, lyric, bio }) => {
  return (
    <>
      {lyric.error || lyric.err || lyric.name === 'AbortError' ? (
        <Message
          msg={`Error: no existe la canción '${search.song}'`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no existe el interprete '${search.artist}'`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;