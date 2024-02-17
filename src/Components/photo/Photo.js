import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Photo = ({ photos }) => {
  // initialize state for the title and response
  const [title, setTitle] = useState("");
  const [response, setResponse] = useState("");

  // get the photo id
  const { id } = useParams();

  // find the photo
  const photo = photos.find((photo) => photo.id === parseInt(id));

  // PUT REQUEST TO UPDATE PHOTO TITLE
  const updatePhotoTitle = async (e, id) => {
    // prevent default form submission
    e.preventDefault();

    // if title is empty, return
    if (!title) {
      setResponse("Please enter a title to update...");
      return;
    }
    try {
      // make a PUT request to update the photo title
      const response = await fetch(`http://localhost:3500/api/photos/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: title,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      // if the response is not ok, throw an error
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // log the data
      console.log(data);
      // set the title to empty and the response to success
      setTitle("");
      setResponse("Title updated successfully!!!");
    } catch (error) {
      // catch any errors and log them
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
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-sky-500 p-1 mt-5 text-black focus:outline-none focus:ring "
          />
          <button className="bg-sky-500 text-white px-2 py-1 mt-5 font-bold hover:bg-sky-600">
            Update Title
          </button>
        </form>
        <p
          className={`text-center mt-5 font-bold uppercase ${
            response === "Title updated successfully!!!"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {response}
        </p>
      </div>
    </div>
  );
};

export default Photo;
