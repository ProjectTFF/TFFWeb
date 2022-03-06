import React from 'react';
import { Link } from 'react-router-dom';

export const Artist = ({

    artistName,
    artistPlace,
    artistRole,
    artistPicture,

}) => (
  <Link to={`/artists/${artistName}`} className="artist">
    <div className="picture">
      <img src={artistPicture} alt={artistName} />
    </div>
    <div className="role">
      {artistRole}
    </div>
    <div className="name">
      {artistName}
    </div>
    <div className="place">
      {artistPlace}
    </div>
  </Link>
);
