import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./Components/landingPage/LandingPage";
import Home from "./Components/home/Homepage";
import User from "./Components/user/User";
import Album from "./Components/album/Album";

const App = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [userAlbums, setUserAlbums] = useState([]);
  const [albumCount, setAlbumCount] = useState(0);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    data.map((user) => {
      getUserAlbums(user.id);
    });
  };

  const getAlbums = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    setAlbums(data);
  };

  const getUserAlbums = async (userId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    const data = await response.json();
    setUserAlbums(data);
    setAlbumCount(data.length);
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
        <Route path="/album/:id" element={<Album albums={albums} />} />
      </Routes>
    </div>
  );
};

export default App;
