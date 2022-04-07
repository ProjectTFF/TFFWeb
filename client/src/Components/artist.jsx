import React from 'react';
import { Link } from 'react-router-dom';

export const Artist = ({

    artistName,
    artistPicture,

}) => (
  <Link to={`/artists/${artistName}`} className="artist">
    <div className="picture">
      <img src={artistPicture} alt={artistName} />
    </div>
    <div className="name">
      {artistName}
    </div>
  </Link>
);
