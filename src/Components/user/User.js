import React from "react";
import { useParams } from "react-router-dom";

const User = ({ users, userAlbums }) => {
  // get the user id from the URL
  const { id } = useParams();
  // find the user by id
  const user = users.find((user) => user.id === parseInt(id));
  // get the user's albums
  const albums = userAlbums[id] || [];

  return (
    <div className="p-10 lg:p-20 text-white">
      <h2 className="text-4xl font-extrabold text-white underline mb-10">
        {/* get the user's name */}
        {user.name}
      </h2>
      {/* list the user's albums */}
      <ol style={{ listStyle: "circle" }}>
        {albums.map((album, index) => (
          <li key={index}>{album.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default User;
