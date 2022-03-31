import React from 'react';
import ArtistCollection from '../Components/artistDefault';
import { HomeArtistObject } from '../Helpers/homeArtistMap';
import PrimaryButton from '../Components/primaryButton';

import '../Assets/Styles/artists.css';

function Artists() {
  return (
    <main>
      <div className="container">
        <div className="artists">
          <h1 className="page-title">Artists</h1>
          <div className="artist-row">
            {HomeArtistObject.map((artistObj) => (
              <ArtistCollection
                key={artistObj.artistName}
                artistImage={artistObj.artistPicture}
                artistName={artistObj.artistName}
              />
         ))}
          </div>

          <div className="button-wrap">
            <PrimaryButton
              buttonText="buy tickets"
              showIcon
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Artists;
