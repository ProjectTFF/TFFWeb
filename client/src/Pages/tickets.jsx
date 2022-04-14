import React from 'react';
import '../Assets/Styles/ticket.css';
import DefaultButton from '../Components/defaultButton';
import PrimaryButton from '../Components/primaryButton';
import PromoImage from '../Assets/Images/promo.png';

function Tickets(props) {
  const {
    language,
   } = props;

  // Content of the page by language
  let content = {
    english: {
      ticketTitle: 'TICKETS AND STREAMING',
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
      p1: 'Tampere Flute Fest 2022 will bring an eclectic program of icy sonic wonder this April 22nd-24th!',
      p2: 'Inspired by the wonders of nature, this year’s edition titled “JÄÄ • ICE”, will deliver a diverse range of in-person, and live-streamed events where innovation and the flute meet.',
    },
    finnish: {
      ticketTitle: 'LIPUT JA SUORATOISTO',
      buyTickets: 'osta liput',
      buyStreaming: 'osta suoratoisto',
      p1: 'Tampere Flute Fest 2022 vie matkalle halki lumen ja jään 22.-24. huhtikuuta!',
      p2: 'Tämän vuoden teema “JÄÄ//ICE” saa inspiraationsa luonnon ihmeistä ja luvassa on musiikillisesti monipuolinen valikoima tapahtumia, joissa voit kokea huilun uusilla tavoilla, paikan päällä tai verkon välityksellä osallistuen.',
    },
  };

content = language === 'finnish' ? (content.finnish) : (content.english);
  return (
    <main>
      <div className="ticket-holder">
        <div className="container">
          <h1 className="page-title">{content.ticketTitle}</h1>
          <div className="ticket-text-content">
            <div className="img-wrap">
              <img src={PromoImage} alt="" />
            </div>
            <p>{content.p1}</p>
            <p>{content.p2}</p>
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

export default Tickets;
