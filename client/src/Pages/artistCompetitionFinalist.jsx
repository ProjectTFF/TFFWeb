import React from 'react';
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
      // tickets: 'buy tickets',
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
    },
    finnish: {
      title: 'Young Artist Competition -kilpailun finalistit',
      // tickets: 'osta liput',
      buyTickets: 'osta liput',
      buyStreaming: 'osta suoratoisto',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);
  return (
    <main>
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
                buttonText={content.buyTickets}
                showIcon
              />
            </li>
            <li>
              <DefaultButton
                url="https://www.lippu.fi/en/eventseries/tampere-flute-fest-2022-livestriimi-3116312/"
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
