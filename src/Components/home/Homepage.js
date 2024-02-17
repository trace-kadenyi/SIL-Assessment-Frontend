import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ users, albums, albumCount, getUsers, getAlbums }) => {
  const navigate = useNavigate();

  // handle navigation to user page
  const navigateToUser = (userId) => {
    navigate(`/user/${userId}`);
  };

  // handle navigation to album page
  const navigatetoAlbum = (albumId) => {
    navigate(`/album/${albumId}`);
  };

  return (
    <main className="p-10 lg:p-20">
      <h2 className="text-4xl font-extrabold text-white underline mb-10">
        HOME
      </h2>{" "}
      {/* list all users */}
      <div>
        <p className="text-white">
          <span className="font-bold">
            1. Click on the buttons below to{" "}
            <span className="text-emerald-500 italic">GET</span> the users and
            albums respectively.
          </span>
          <br />
          <span className="font-bold">
            2. Click on individual users to{" "}
            <span className="text-emerald-500 italic">GET</span> user details.
          </span>
          <br />
          <span className="font-bold">
            3. Click on individual albums to{" "}
            <span className="text-emerald-500 italic">GET</span> album details.
          </span>
        </p>
        {/* get request for users*/}
        <div className="my-10 w-full flex items-start flex-col gap-5">
          <button
            className="bg-sky-50 hover:bg-black text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg focus:bg-black focus:text-white "
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
            className="bg-sky-50 hover:bg-black text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg focus:bg-black focus:text-white"
            onClick={getAlbums}
          >
            Get All Albums
          </button>
          {/* list all the albums */}
          <ol style={{ listStyleType: "number" }} className="text-white">
            {albums.map((album) => (
              <li
                key={album.id}
                className="leading-7 cursor-pointer my-5 hover:underline"
                onClick={() => navigatetoAlbum(album.id)}
              >
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
