import React from 'react';
import axios from 'axios';
import ArtistCollection from '../Components/artistDefault';
import PrimaryButton from '../Components/primaryButton';

import '../Assets/Styles/artists.css';

function Artists(props) {
  const {
    language,
   } = props;

  /**
   * Get information from backend (All artists)
   */
  const [artists, setArtists] = React.useState([]);
  const changeState = (prop) => { setArtists(prop); };
  if (artists.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist`).then((res) => { const val = res.data; changeState(val); });
  }

  // Content of the page by language
  let content = {
    english: {
      title: 'Artists',
      tickets: 'buy tickets',
    },
    finnish: {
      title: 'Artists (Finnish)',
      tickets: 'buy tickets (Finnish)',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);

  return (
    <main>
      <div className="container">
        <div className="artists">
          <h1 className="page-title">{content.title}</h1>
          <div className="artist-row">
            {artists.map((artist) => (
              <ArtistCollection
                artistId={artist.artistid}
              />
         ))}
          </div>

          <div className="button-wrap">
            <PrimaryButton
              buttonText={content.tickets}
              showIcon
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Artists;
