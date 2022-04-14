import React from 'react';
import Banner from '../Components/banner';
import PrimaryButton from '../Components/primaryButton';
import DefaultButton from '../Components/defaultButton';
import '../Assets/Styles/venue.css';

function Venue(props) {
  const {
    language,
   } = props;

  // Content of the page by language
  let content = {
    english: {
      title: 'venue',
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere Hall',
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
      venue1: 'Tampere Hall',
      venue2: 'Tampere Conservatoire',
      venue3: 'Culture House Laikku',
      weekDay1: 'Friday',
      weekDay2: 'Saturday',
      weekDay3: 'Sunday',
      ticketLink: 'https://www.lippu.fi/en/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/en/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
    },
    finnish: {
      title: 'Tapahtumapaikka',
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere-Talo',
      buyTickets: 'osta liput',
      buyStreaming: 'osta suoratoisto',
      venue1: 'Tampere-Talo',
      venue2: 'Tampereen konservatorio',
      venue3: 'Kulttuuritalo Laikku',
      weekDay1: 'Perjantai',
      weekDay2: 'Lauantai',
      weekDay3: 'Sunnuntai',
      ticketLink: 'https://www.lippu.fi/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);
  return (
    <main>
      <Banner
        bannerTitle={content.bannerTitle}
        bannerHall={content.hall}
      />
      <div className="container">
        <div className="venue-section">
          <h1 className="page-title">{content.title}</h1>
          <div className="venue-holder">
            <div className="venue-map-holder">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1qZruUtMM8F6h_NNdoqeU9jBLLsevKpP5&ehbc=2E312F"
                width="640"
                height="480"
                title="TFF"
              />
            </div>
            <div className="venue-location-holder">
              <div className="venue-info">
                <a target="_blank" href="http://www.tampere-talo.fi/" rel="noreferrer">{content.venue1}</a>
                <span className="event-date">
                  {content.weekDay3}
                  &nbsp;24.4.22
                </span>
              </div>
              <div className="venue-info">
                <a target="_blank" href="https://www.tampereenkonservatorio.fi/" rel="noreferrer">{content.venue2}</a>
                <span className="event-date">
                  {content.weekDay2}
                  &nbsp;23.4.22
                </span>
              </div>
              <div className="venue-info">
                <a target="_blank" href="https://www.laikku.fi/" rel="noreferrer">{content.venue3}</a>
                <span className="event-date">
                  {content.weekDay1}
                  &nbsp;22.4.22
                </span>
              </div>
            </div>
          </div>
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
    </main>
  );
}

export default Venue;
