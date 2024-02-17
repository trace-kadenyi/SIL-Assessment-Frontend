import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Album = ({ albums, photos, getAlbumPhotos }) => {
  //    get album id
  const { id } = useParams();
  //   find photos for the album
  const album = albums.find((album) => album.id === parseInt(id));

  // useeffect to get album photos
  useEffect(() => {
    getAlbumPhotos(album.id);
  }, [album.id, getAlbumPhotos]);

  //  navigate to photo page
  const navigate = useNavigate();

  //  handle photo click
  const handlePhotoClick = (photo) => {
    navigate(`/photo/${photo.id}`);
  };

  return (
    <div className="p-10 lg:p-20 text-white">
      <h2 className="text-4xl font-extrabold text-white underline mb-10">
        {album.title}
      </h2>
      {/* list the album photos */}
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
            <li key={photo.id} className="text-white cursor-pointer">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-16 lg:w-20"
                onClick={() => handlePhotoClick(photo)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Album;
