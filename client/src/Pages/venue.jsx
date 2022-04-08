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
          <div className="venue-holder">
            <div className="venue-map-holder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1904.0180958149626!2d23.778449816160823!3d61.496056382468666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edf5403e22497%3A0xca85cc20221ba48d!2sTampere-talo%20Oy!5e0!3m2!1sen!2sfi!4v1649333564614!5m2!1sen!2sfi"
                width="600"
                height="450"
                title="Tampere Talo map"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className="venue-location-holder">
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
        </div>
      </div>
    </main>
  );
}

export default Venue;
