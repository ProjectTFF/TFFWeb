import React from 'react';
import axios from 'axios';
import Banner from '../Components/banner';
import ArtistCollection from '../Components/artistDefault';
import PrimaryButton from '../Components/primaryButton';
import DefaultButton from '../Components/defaultButton';

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
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere Hall',
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
      ticketLink: 'https://www.lippu.fi/en/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/en/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
    },
    finnish: {
      title: 'Artistit',
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere-Talo',
      buyTickets: 'osta liput',
      buyStreaming: 'osta suoratoisto',
      ticketLink: 'https://www.lippu.fi/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);

  return (
    <main>
      <Banner
        bannerTitle={content.bannerTitle}
        bannerHall={content.hall}
      />
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
          <ul className="btn-groups">
            <li>
              <PrimaryButton
                url={content.ticketLink}
                buttonText={content.buyTickets}
                showIcon
              />
            </li>
            <li>
              <DefaultButton
                url={content.streamLink}
                buttonText={content.buyStreaming}
                showIcon
              />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Artists;
