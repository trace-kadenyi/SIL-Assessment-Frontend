import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Album = ({ albums }) => {
  const [photos, setPhotos] = useState([]);
  //    get album id
  const { id } = useParams();
  //   find photos for the album
  const album = albums.find((album) => album.id === parseInt(id));
  // get album photos
  const getAlbumPhotos = async (albumId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
    const data = await response.json();
    setPhotos(data);
  };

  getAlbumPhotos(album.id);

  return (
    <div className="p-10 lg:p-20 text-white">
      <h2 className="text-4xl font-extrabold text-white underline mb-10">
        {album.title}
      </h2>
      {/* list the album photos */}
      {photos.length > 0 ? (
        <div>
          <h3 className="font-bold text-white mb-5 italic overline">
            Album No. {album.id} Photos
          </h3>
          <ul
            className="
                flex flex-wrap gap-2 items-center
                "
          >
            {photos.map((photo) => (
              <li key={photo.id} className="text-white">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-16 lg:w-20"
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
};

export default Album;
