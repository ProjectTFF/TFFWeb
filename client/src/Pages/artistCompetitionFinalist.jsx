import React from 'react';
import Banner from '../Components/banner';
import ArtistCompetition from '../Components/artistCompetition';
import { CompetitionFinalist } from '../Helpers/competitionFinalist';
import PrimaryButton from '../Components/primaryButton';
import DefaultButton from '../Components/defaultButton';

import '../Assets/Styles/artists.css';

function ArtistCompetitionFinalist(props) {
  const {
    language,
   } = props;

  // Content of the page by language
  let content = {
    english: {
      title: 'Young Artist Competition Finalists',
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere Hall',
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
      ticketLink: 'https://www.lippu.fi/en/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/en/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
    },
    finnish: {
      title: 'Young Artist Competition -kilpailun finalistit',
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
        <div className="competition-info-wrap">
          <h1 className="page-title">{content.title}</h1>
          <div className="competition-info-row">
            {CompetitionFinalist.map((finalistObj) => (
              <ArtistCompetition
                key={finalistObj.id}
                artistImage={finalistObj.artistImage}
                artistName={finalistObj.artistName}
                artistDetail1={finalistObj.artistDetail1}
                artistDetail2={finalistObj.artistDetail2}
                artistDetail3={finalistObj.artistDetail3}
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

export default ArtistCompetitionFinalist;
