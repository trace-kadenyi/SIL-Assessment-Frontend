import React, { useState } from "react";
import { useParams } from "react-router-dom";

const User = ({ users, userAlbums }) => {
  const [view, setView] = useState(false);
  // get the user id from the URL
  const { id } = useParams();
  // find the user by id
  const user = users.find((user) => user.id === parseInt(id));
  // get the user's albums
  const albums = userAlbums[id] || [];

  // handle view additional information
  const handleView = () => {
    setView(!view);

    // get the additional information
    const additional_info = document.querySelector(".additional_info");

    // if view is true, show the additional information
    if (view) {
      additional_info.style.display = "none";
    } else {
      additional_info.style.display = "block";
    }
  };

  return (
    <div className="p-10 lg:p-20 text-white">
      <h2 className="text-4xl font-extrabold text-white underline mb-5">
        {/* get the user's name */}
        {user.name}
      </h2>
      <p className="font-bold">
        {/* get the user's username */}
        <span className="font-semibold italic text-emerald-500">
          Username:
        </span>{" "}
        {user.username}
        <br />
        {/* get the user's email */}
        <span className="font-semibold italic text-emerald-500">
          Email Address:
        </span>{" "}
        {user.email} <br />
        {/* get the user's phone and website */}
        <span className="font-semibold italic text-emerald-500">
          Phone:
        </span>{" "}
        {user.phone} <br />
        <span className="font-semibold italic text-emerald-500">
          Website:
        </span>{" "}
        {user.website}
      </p>
      {/* list the user's albums */}
      <h3 className="text-2xl font-semibold text-white underline mt-2">
        Albums
      </h3>
      <ol style={{ listStyle: "circle" }} className="mt-5">
        {albums.map((album, index) => (
          <li key={index}>{album.title}</li>
        ))}
      </ol>
      {/* additional information */}
      <button className="bg-sky-50 hover:bg-black text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg focus:bg-black focus:text-white mt-5">
        {/* handle view additional information */}
        <span onClick={handleView}>
          Click to {view ? "Hide" : "View"} Additional Information
        </span>
      </button>

      <div className="additional_info mt-5" style={{ display: "none" }}>
        {/* address */}
        <h3 className="text-2xl font-semibold text-white underline mt-5">
          Address
        </h3>
        <ul style={{ listStyle: "circle" }} className="mt-1">
          <li>
            <span className="font-semibold italic text-emerald-500">
              Street:
            </span>{" "}
            {user.address.street}
          </li>
          <li>
            <span className="font-semibold italic text-emerald-500">
              Suite:
            </span>{" "}
            {user.address.suite}
          </li>
          <li>
            <span className="font-semibold italic text-emerald-500">City:</span>{" "}
            {user.address.city}
          </li>
          <li>
            <span className="font-semibold italic text-emerald-500">
              Zipcode:
            </span>{" "}
            {user.address.zipcode}
          </li>
        </ul>

        {/* company */}
        <h3 className="text-2xl font-semibold text-white underline mt-5">
          Company
        </h3>
        <ul style={{ listStyle: "circle" }} className="mt-1">
          <li>
            <span className="font-semibold italic text-emerald-500">Name:</span>{" "}
            {user.company.name}
          </li>
          <li>
            <span className="font-semibold italic text-emerald-500">
              Catch Phrase:
            </span>{" "}
            {user.company.catchPhrase}
          </li>
          <li>
            <span className="font-semibold italic text-emerald-500">BS:</span>{" "}
            {user.company.bs}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
