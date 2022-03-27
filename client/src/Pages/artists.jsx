import React from 'react';
import ArtistCollection from '../Components/artistDefault';
import { HomeArtistObject } from '../Helpers/homeArtistMap';
import PrimaryButton from '../Components/primaryButton';

import '../Assets/Styles/artists.css';

function Artists() {
  return (
    <div className="artists">
      <h1>Artists</h1>
      <div className="artist-row">
        {HomeArtistObject.map((artistObj) => (
          <ArtistCollection
            key={artistObj.artistName}
            artistImage={artistObj.artistPicture}
            artistRole={artistObj.artistRole}
            artistName={artistObj.artistName}
            artistPlace={artistObj.artistPlace}
          />
         ))}
      </div>

      <div className="artists-bottom">
        <PrimaryButton />
      </div>
    </div>
  );
}

export default Artists;
