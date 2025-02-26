import React from "react";
import ItemList from "./ItemList.jsx";
import { artistArray } from "../assets/DataBase/artists";
import { songsArray } from "../assets/DataBase/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={5}
          itemsArray={artistArray}
          path="/artists"
          idPath="artist"
        />
      ) : (
        <></>
      )}{" "}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={14}
          itemsArray={songsArray}
          path="/songs"
          idPath="song"
        />
      ) : (
        <></>
      )}{" "}
    </div>
  );
};

export default Main;
