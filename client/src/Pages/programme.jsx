import React from 'react';
import '../Assets/Styles/errorPage.css';
import PrimaryButton from '../Components/primaryButton';

function Programme(props) {
  const {
    language,
   } = props;

  // Content of the page by language
  let content = {
    english: {
      soon: 'Coming Soon!',
      tickets: 'buy tickets',
    },
    finnish: {
      soon: 'Coming Soon! (Finnish)',
      tickets: 'buy tickets (Finnish)',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);
  return (
    <div className="comingSoon-page-wrapper">
      <div className="comingSoon-page-holder">
        <h1>{content.soon}</h1>
        <div className="button-wrap">
          <PrimaryButton
            buttonText={content.tickets}
            showIcon
          />
        </div>
      </div>
    </div>
  );
}

export default Programme;
