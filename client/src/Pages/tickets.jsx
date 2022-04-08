import React from 'react';
import '../Assets/Styles/ticket.css';
import DefaultButton from '../Components/defaultButton';
import PrimaryButton from '../Components/primaryButton';
import PromoImage from '../Assets/Images/promo.png';

function Tickets() {
  return (
    <main>
      <div className="ticket-holder">
        <div className="container">
          <h1 className="page-title">TICKETS AND STREAMING</h1>
          <div className="ticket-text-content">
            <div className="img-wrap">
              <img src={PromoImage} alt="" />
            </div>
            <p>
              Tampere Flute Fest 2022 will bring an eclectic program of
              icy sonic wonder this April 22nd-24th!
            </p>
            <p>
              Inspired by the wonders of nature, this year’s
              edition titled “JÄÄ • ICE”, will deliver a diverse
              range of in-person, and live-streamed events where
              innovation and the flute meet.
            </p>
          </div>
          <ul className="btn-groups">
            <li>
              <PrimaryButton
                buttonText="buy tickets"
                showIcon
              />
            </li>
            <li>
              <DefaultButton
                buttonText="buy streaming"
                showIcon
              />
            </li>
          </ul>

        </div>
      </div>
    </main>
  );
}

export default Tickets;
