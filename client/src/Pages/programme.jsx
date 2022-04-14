import React from 'react';
import '../Assets/Styles/errorPage.css';
import PrimaryButton from '../Components/primaryButton';
import DefaultButton from '../Components/defaultButton';

function Programme(props) {
  const {
    language,
   } = props;

  // Content of the page by language
  let content = {
    english: {
      soon: 'Coming Soon!',
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
      ticketLink: 'https://www.lippu.fi/en/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/en/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
    },
    finnish: {
      soon: 'Tulossa!',
      buyTickets: 'osta liput',
      buyStreaming: 'osta suoratoisto',
      ticketLink: 'https://www.lippu.fi/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);
  return (
    <div className="comingSoon-page-wrapper">
      <div className="comingSoon-page-holder">
        <h1>{content.soon}</h1>
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
  );
}

export default Programme;
