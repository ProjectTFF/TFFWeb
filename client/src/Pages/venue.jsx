import React from 'react';
import VenueDetail from '../Components/venueDetail';
import PrimaryButton from '../Components/primaryButton';
import { VenueCollection } from '../Helpers/venueCollection';

function Venue(props) {
  const {
    language,
   } = props;

  // Content of the page by language
  let content = {
    english: {
      title: 'venue',
      tickets: 'buy tickets',
    },
    finnish: {
      title: 'venue (Finnish)',
      tickets: 'buy tickets (Finnish)',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);
  return (
    <main>
      <div className="container">
        <div className="venue-section">
          <h1 className="page-title">{content.title}</h1>
          <div className="venue-row">
            {VenueCollection.map((venueObj) => (
              <VenueDetail
                key={venueObj.id}
                venueHomeLink={venueObj.venueHomeLink}
                venueName={venueObj.venueName}
                venueAddress={venueObj.venueAddress}
                venueMapLink={venueObj.venueMapLink}
                language={language}
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

export default Venue;
