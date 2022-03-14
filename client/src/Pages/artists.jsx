import React from 'react';
import ArtistCollection from '../Components/artistDefault';
import { homeArtistObject } from '../Helpers/homeArtistMap';
import DefaultButton from '../Components/defaultButton';

import '../Assets/Styles/artists.css';

function Artists() {
  return (
    <div className="artists">
      <h1>Artists</h1>
      <div className="artist-row">
        {homeArtistObject.splice(0, 4).map((artistObj) => (
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
        <DefaultButton />
      </div>
    </div>
  );
}

export default Artists;
