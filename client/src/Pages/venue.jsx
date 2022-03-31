import React from 'react';
import VenueDetail from '../Components/venueDetail';
import PrimaryButton from '../Components/primaryButton';
import { VenueCollection } from '../Helpers/venueCollection';

function Venue() {
  return (
    <main>
      <div className="container">
        <div className="venue-section">
          <h1 className="page-title">venue</h1>
          <div className="venue-row">
            {VenueCollection.map((venueObj) => (
              <VenueDetail
                key={venueObj.id}
                venueHomeLink={venueObj.venueHomeLink}
                venueName={venueObj.venueName}
                venueAddress={venueObj.venueAddress}
                venueMapLink={venueObj.venueMapLink}
              />
            ))}
          </div>
          <div className="button-wrap">
            <PrimaryButton
              buttonText="buy tickets"
              showIcon
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Venue;
