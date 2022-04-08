import React from 'react';
import ArtistCompetition from '../Components/artistCompetition';
import { CompetitionFinalist } from '../Helpers/competitionFinalist';
import PrimaryButton from '../Components/primaryButton';

import '../Assets/Styles/artists.css';

function ArtistCompetitionFinalist(props) {
  const {
    language,
   } = props;

  // Content of the page by language
  let content = {
    english: {
      title: 'Young Artist Competition Finalists',
      tickets: 'buy tickets',
    },
    finnish: {
      title: 'Young Artist Competition -kilpailun finalistit',
      tickets: 'osta liput',
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

export default ArtistCompetitionFinalist;
