import React from 'react';
import '../Assets/Styles/programmePage.css';
import Banner from '../Components/banner';
import PrimaryButton from '../Components/primaryButton';
import DefaultButton from '../Components/defaultButton';

function Programme(props) {
  const {
    language, handleSetLanguage,
   } = props;

  // Content of the page by language
  let content = {
    english: {
      programmeTitle: 'PROGRAMME',
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere Hall',
      soon: 'Coming Soon!',
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
      ticketLink: 'https://www.lippu.fi/en/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/en/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
    },
    finnish: {
      programmeTitle: 'PROGRAMME (Finnish)',
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere-Talo',
      soon: 'Tulossa!',
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
          <div className="pass-division">
            <h2 className="pass-title">
              24.4.22 NAME OF THE PASS
              <ul className="btn-near">
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
            </h2>
            <p className="pass-infos">
              <p>description</p>
              <p>
                {'Location : '}
                <span>here</span>
              </p>
              <p className="pass-special">special info</p>
            </p>
            <ol className="pass-timetable">
              <li>
                <p className="pass-time">time</p>
                <p className="pass-right-timetable">
                  <p className="pass-event">event</p>
                  <p className="pass-artists">
                    {'artists: '}
                    <span>
                      name
                    </span>
                  </p>
                </p>
              </li>
              <li>
                <p className="pass-time">time</p>
                <p className="pass-right-timetable">
                  <p className="pass-event">event</p>
                  <p className="pass-artists">
                    {'artists: '}
                    <span>
                      name
                    </span>
                  </p>
                </p>
              </li>
              <li>
                <p className="pass-time">time</p>
                <p className="pass-right-timetable">
                  <p className="pass-event">event</p>
                  <p className="pass-artists">
                    {'artists: '}
                    <span>
                      name
                    </span>
                  </p>
                </p>
              </li>
            </ol>
          </div>
          <div className="pass-division">
            <h2 className="pass-title">
              24.4.22 NAME OF THE PASS
              <ul className="btn-near">
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
            </h2>
            <p className="pass-infos">
              <p>description</p>
              <p>
                {'Location : '}
                <span>here</span>
              </p>
              <p className="pass-special">special info</p>
            </p>
            <ol className="pass-timetable">
              <li>
                <p className="pass-time">time</p>
                <p className="pass-right-timetable">
                  <p className="pass-event">event</p>
                  <p className="pass-artists">
                    {'artists: '}
                    <span>
                      name
                    </span>
                  </p>
                </p>
              </li>
              <li>
                <p className="pass-time">time</p>
                <p className="pass-right-timetable">
                  <p className="pass-event">event</p>
                  <p className="pass-artists">
                    {'artists: '}
                    <span>
                      name
                    </span>
                  </p>
                </p>
              </li>
              <li>
                <p className="pass-time">time</p>
                <p className="pass-right-timetable">
                  <p className="pass-event">event</p>
                  <p className="pass-artists">
                    {'artists: '}
                    <span>
                      name
                    </span>
                  </p>
                </p>
              </li>
            </ol>
          </div>
          <div className="pass-division">
            <h2 className="pass-title">
              24.4.22 NAME OF THE PASS
              <ul className="btn-near">
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
            </h2>
            <p className="pass-infos">
              <p>description</p>
              <p>
                {'Location : '}
                <span>here</span>
              </p>
              <p className="pass-special">special info</p>
            </p>
            <ol className="pass-timetable">
              <li>
                <p className="pass-time">time</p>
                <p className="pass-right-timetable">
                  <p className="pass-event">event</p>
                  <p className="pass-artists">
                    {'artists: '}
                    <span>
                      name
                    </span>
                  </p>
                </p>
              </li>
              <li>
                <p className="pass-time">time</p>
                <p className="pass-right-timetable">
                  <p className="pass-event">event</p>
                  <p className="pass-artists">
                    {'artists: '}
                    <span>
                      name
                    </span>
                  </p>
                </p>
              </li>
              <li>
                <p className="pass-time">time</p>
                <p className="pass-right-timetable">
                  <p className="pass-event">event</p>
                  <p className="pass-artists">
                    {'artists: '}
                    <span>
                      name
                    </span>
                  </p>
                </p>
              </li>
            </ol>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Programme;
