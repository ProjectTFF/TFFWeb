import React from 'react';
import axios from 'axios';
import ArtistCollection from '../Components/artistDefault';
import PrimaryButton from '../Components/primaryButton';

import '../Assets/Styles/artists.css';

function Artists() {
  /**
   * Get information from backend (All artists)
   */
  const [artists, setArtists] = React.useState([]);
  const changeState = (prop) => { setArtists(prop); };
  if (artists.length === 0) {
    console.log(`Process.env.REACT_APP_BASE_URL: ${process.env.REACT_APP_BASE_URL}`);
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist`).then((res) => { const val = res.data; changeState(val); });
  }

  return (
    <main>
      <div className="container">
        <div className="artists">
          <h1 className="page-title">Artists</h1>
          <div className="artist-row">
            {artists.map((artist) => (
              <ArtistCollection
                artistId={artist.artistid}
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
