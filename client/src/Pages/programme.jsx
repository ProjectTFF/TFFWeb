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
      // tickets: 'buy tickets',
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
    },
    finnish: {
      soon: 'Tulossa!',
      // tickets: 'osta liput',
      buyTickets: 'osta liput',
      buyStreaming: 'osta suoratoisto',
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
  );
}

export default Programme;
