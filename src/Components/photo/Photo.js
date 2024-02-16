import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Photo = ({ photos, getAlbumPhotos }) => {
  const [title, setTitle] = useState("");
  const [response, setResponse] = useState("");
  const { id } = useParams();

  const photo = photos.find((photo) => photo.id === parseInt(id));

  // getAlbumPhotos(photo.albumId);

  // PUT REQUEST TO UPDATE PHOTO TITLE
  const updatePhotoTitle = async (e, id) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: title,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setTitle("");
      setResponse("Title updated successfully!!!");
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <div
      className="p-10 lg:p-20 text-white mx-auto flex flex-col items-center justify-center
    "
    >
      <h2 className="text-4xl font-extrabold text-white underline mb-10">
        {photo.title}
      </h2>
      <div>
        <img
          src={photo.url}
          alt={photo.title}
          className="w-3/4 sm:w-3/6 md:w-2/6"
        />
        <form
          onSubmit={(e) => updatePhotoTitle(e, photo.id)}
          className="flex flex-col mt-5"
        >
          <label htmlFor="title" className="text-white font-semibold">
            To update the title, enter the new title below:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-sky-500 p-1 mt-5 text-black"
          />
          <button className="bg-sky-500 text-white px-2 py-1 mt-5 font-bold">
            Update Title
          </button>
        </form>
        <p
          className="text-emerald-500 mt-5
        "
        >
          {response}
        </p>
      </div>
    </div>
  );
};

export default Photo;
