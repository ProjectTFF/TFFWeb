import React from 'react';
import axios from 'axios';
import '../Assets/Styles/programmePage.css';
import Banner from '../Components/banner';
import PrimaryButton from '../Components/primaryButton';

function Programme(props) {
  const {
    language, handleSetLanguage,
   } = props;

  /**
   * Get information from backend (All programmes)
   */
  const [programmes, setProgrammes] = React.useState([]);
  if (programmes.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/allprogrammes`).then((res) => { const val = res.data; setProgrammes(val); });
  }

  const [timetable, setTimetable] = React.useState([]);

  if (programmes.length !== 0 && timetable.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/1`).then((res) => { const val = res.data; setTimetable(val); });
  }

  // Content of the page by language
  let content = {
    english: {
      programmeTitle: 'PROGRAMME',
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere Hall',
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
      ticketLink: 'https://www.lippu.fi/en/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/en/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
    },
    finnish: {
      programmeTitle: 'PROGRAMME (Finnish)',
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere-Talo',
      buyTickets: 'osta liput',
      buyStreaming: 'osta suoratoisto',
      ticketLink: 'https://www.lippu.fi/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);
  return (
    <>
      <Banner
        bannerTitle={content.bannerTitle}
        bannerHall={content.hall}
        language={language}
        handleSetLanguage={handleSetLanguage}
      />
      <div className="programme-holder">
        <div className="container">
          <h1 className="page-title">{content.programmeTitle}</h1>
          {programmes.map((programme) => (
            <div className="pass-division">
              <h2 className="pass-title">
                {`${programme.concertdate} ${programme.concertname}`}
                <ul className="btn-near">
                  <li>
                    <PrimaryButton
                      url={content.ticketLink}
                      buttonText={content.buyTickets}
                      showIcon
                    />
                  </li>
                </ul>
              </h2>
              <p className="pass-infos">
                {/* <p>description</p> */}
                <p>
                  {'Location : '}
                  <span>{programme.venuename}</span>
                </p>
                {/* <p className="pass-special">special info</p> */}
              </p>
              <ol className="pass-timetable">
                {timetable.map((event) => (
                  event.performancename_eng
                ))}
              </ol>
            </div>
         ))}
        </div>
      </div>
    </>
  );
}

export default Programme;
