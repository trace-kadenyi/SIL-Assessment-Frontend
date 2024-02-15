import React from "react";
import { useParams } from "react-router-dom";

const User = ({
  users,
  userAlbums,

}) => {
  // get user information
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  return (
    <div className="p-10 lg:p-20 text-white">
      <h2 className="text-4xl font-extrabold text-white underline mb-10">
        {user.name}
      </h2>
      {/* list the user's albums */}
      {userAlbums.length > 0 ? (
        <div>
          <h3 className="font-bold text-white mb-5 italic overline">Albums</h3>
          <ol style={{ listStyleType: "circle" }}>
            {userAlbums.map((album) => (
              <li key={album.id} className="text-white">
                {album.title}
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
};

export default User;
