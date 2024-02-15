import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // JSON Placeholder API
  //   Have a page that lists all the users:
  // i. The page should tell you how many albums a user has
  // ii. The page must run a GET request for the users
  // iii. The page must run a GET request for the albums

  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [userAlbums, setUserAlbums] = useState([]);
  const [albumCount, setAlbumCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  // get request for users
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    // get user albums count
    data.map((user) => {
      getUserAlbums(user.id);
    });
  };

  // get request for albums
  const getAlbums = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    setAlbums(data);
  };

  // get request for user albums
  const getUserAlbums = async (userId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    const data = await response.json();
    setUserAlbums(data);
    setAlbumCount(data.length);
    setClicked(true);
  };

  // navigate to user page
  const navigateToUser = (userId) => {
    navigate(`/user/${userId}`);
  };

  return (
    <main className="p-20">
      <h2 className="text-4xl font-extrabold text-white underline mb-10">
        HOME
      </h2>{" "}
      {/* list all users */}
      <div>
        <p className="text-white">
          The current page provides a list of all the users and albums on the
          database.{" "}
          <span className="underline font-bold">
            Click on each user to view their details.
          </span>
        </p>
        {/* get request for users*/}
        <div className="my-10 w-full flex items-start flex-col gap-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={getUsers}
          >
            Get Users
          </button>
          {/* list all the users */}
          <ol style={{ listStyleType: "number" }} className="text-white">
            {users.map((user) => (
              <li
                key={user.id}
                className="uppercase leading-6 cursor-pointer my-5 hover:underline"
                onClick={() => navigateToUser(user.id)}
              >
                {user.name} has{" "}
                <span className="font-bold">{albumCount} albums</span>
              </li>
            ))}
          </ol>

          {/* get albums */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={getAlbums}
          >
            Get All Albums
          </button>
          {/* list all the albums */}
          <ol style={{ listStyleType: "number" }} className="text-white">
            {albums.map((album) => (
              <li key={album.id} className="leading-7">
                {album.title}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Home;
