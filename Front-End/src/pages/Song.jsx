import React from "react";
import Player from "../componentes/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/DataBase/songs";
import { artistArray } from "../assets/DataBase/artists";

const Song = () => {
  const songId = useParams().id;

  const { image, name, duration, artist, audio, id, index } = songsArray.filter(
    (currentArtisObj) => currentArtisObj._id === songId
  )[0];

  const artisObj = artistArray.filter(
    (currentArtisObj) => currentArtisObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`imagem da musica ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/${artisObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artisObj.image}
            alt={`Imagem do artista ${artisObj.name}`}
          />
        </Link>
        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
