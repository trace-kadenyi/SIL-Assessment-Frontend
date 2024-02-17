import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./Components/landingPage/LandingPage";
import Home from "./Components/home/Homepage";
import User from "./Components/user/User";
import Album from "./Components/album/Album";
import Photo from "./Components/photo/Photo";

const App = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [userAlbums, setUserAlbums] = useState([]);
  const [albumCount, setAlbumCount] = useState(0);
  const [photos, setPhotos] = useState([]);
  // object to hold the user's albums
  const userAlbumsObj = {};

  // fetch users from the API
  const getUsers = async () => {
    const response = await fetch("http://localhost:3500/api/users");
    const data = await response.json();
    // set the users state
    setUsers(data);
    // get the albums for each user
    data.map((user) => {
      getUserAlbums(user.id);
    });
  };

  // fetch albums from the API
  const getAlbums = async () => {
    const response = await fetch("http://localhost:3500/api/albums");
    const data = await response.json();
    // set the albums state
    setAlbums(data);
  };

  // fetch user albums from the API
  const getUserAlbums = async (userId) => {
    // fetch the user's albums
    const response = await fetch(`http://localhost:3500/api/albums/${userId}`);
    const data = await response.json();

    // add the user's albums to the initialized userAlbumsObj
    data.albums.forEach((album) => {
      const userAlbumsStore = userAlbumsObj[album.userId] || [];
      userAlbumsStore.push(album);
      userAlbumsObj[album.userId] = userAlbumsStore;
    });
    // set the userAlbums state
    setUserAlbums(userAlbumsObj);
    
    // set the albumCount state
    setAlbumCount(data.ALBUMCOUNT);
  };

  const getAlbumPhotos = async (albumId) => {
    const response = await fetch(
      `http://localhost:3500/api/photos/${albumId}`
    );
    const data = await response.json();
    setPhotos(data);
  };

  return (
    <div
      className="bg-sky-800 w-full h-full min-h-screen
    "
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <Home
              users={users}
              setUsers={setUsers}
              albums={albums}
              setAlbums={setAlbums}
              userAlbums={userAlbums}
              setUserAlbums={setUserAlbums}
              albumCount={albumCount}
              setAlbumCount={setAlbumCount}
              getUsers={getUsers}
              getAlbums={getAlbums}
              getUserAlbums={getUserAlbums}
            />
          }
        />
        <Route
          path="/user/:id"
          element={<User users={users} userAlbums={userAlbums} />}
        />
        <Route
          path="/album/:id"
          element={
            <Album
              albums={albums}
              getAlbumPhotos={getAlbumPhotos}
              photos={photos}
            />
          }
        />
        <Route
          path="/photo/:id"
          element={<Photo photos={photos} getAlbumPhotos={getAlbumPhotos} />}
        />
      </Routes>
    </div>
  );
};

export default App;
