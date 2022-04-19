import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Assets/Styles/programmePage.css';
import Banner from '../Components/banner';
import SecondaryButton from '../Components/secondaryButton';

function Programme(props) {
  const {
    language, handleSetLanguage, programmes, timetable, artists,
   } = props;

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  // Content of the page by language
  let content = {
    english: {
      programmeTitle: 'PROGRAM',
      location: 'Location : ',
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere Hall',
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
      ticketLink: 'https://www.lippu.fi/en/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/en/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
    },
    finnish: {
      programmeTitle: 'OHJELMA',
      location: 'Tapahtumapaikka : ',
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
            <div id={programme.concertname_eng} className="pass-division">
              <p className="pass-title">
                {`${programme.concertdate} ${language === 'finnish' ? programme.concertname_fin : programme.concertname_eng}`}
                <ul className="btn-near">
                  <li>
                    <SecondaryButton
                      url={content.ticketLink}
                      buttonText={content.buyTickets}
                      showIcon
                    />
                  </li>
                </ul>
              </p>
              <p className="pass-infos">
                {/* <p>description</p> */}
                <p>
                  {content.location}
                  <Link className="pass-venue" to="/venue">
                    {language === 'finnish' ? programme.venuename_fin : programme.venuename_eng}
                  </Link>
                </p>
                {/* <p className="pass-special">special info</p> */}
              </p>
              <ol className="pass-timetable">
                {timetable[programme.concertid - 1].map((performance) => (
                  <li id={performance.performancename_eng}>
                    <p className="pass-time">
                      {`${performance.performancestarttime}${'-'}${performance.performanceendtime}`}
                    </p>
                    <p className="pass-right-timetable">
                      <p className="performance-name">{language === 'finnish' ? performance.performancename_fin : performance.performancename_eng}</p>
                      <p className="performance-infos">{language === 'finnish' ? performance.performanceinfo_fin : performance.performanceinfo_eng}</p>
                      <ul className="performance-artists">
                        <il>
                          {artists[performance.performanceid - 1].length === 1 ? (artists[performance.performanceid - 1][0] == null ? '' : 'Artist: ') : 'Artists: '}
                        </il>
                        {artists[performance.performanceid - 1].map((artist) => (
                          artist == null
                          ? null
                          : (
                            <>
                              <il>
                                <Link className="performance-artist" to={`/artists/${artist.artistid}`}>
                                  {`${artist.firstname} ${artist.lastname}`}
                                </Link>
                              </il>
                              <il className="performance-lexical">
                                {artists[performance.performanceid - 1].indexOf(artist)
                                === artists[performance.performanceid - 1].length - 1
                                ? null : (artists[performance.performanceid - 1].indexOf(artist)
                                === artists[performance.performanceid - 1].length - 2)
                                ? ' and ' : ', '}
                              </il>
                            </>
                          )
                        )) }
                      </ul>
                    </p>
                  </li>
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
