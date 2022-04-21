import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Assets/Styles/programmePage.css';
import Banner from '../Components/banner';
import SecondaryButton from '../Components/secondaryButton';
import { ProgramPictureMap } from '../Helpers/ProgramPictureMap';

function Programme(props) {
  const {
    language, handleSetLanguage, anchor,
   } = props;

  const { pathname } = useLocation();
  const { programSlug } = useParams();

  /**
   * Get information from backend (All programmes)
   */
  const [programmes, setProgrammes] = React.useState([]);
  if (programmes.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/allprogrammes`).then((res) => { const val = res.data; setProgrammes(val); });
  }

  const timetable = [];

  const [time1, setTime1] = React.useState([]);
  if (time1.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/1`).then((res) => { const val = res.data; setTime1(val); });
  }

  const [time2, setTime2] = React.useState([]);
  if (time1.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/2`).then((res) => { const val = res.data; setTime2(val); });
  }

  const [time3, setTime3] = React.useState([]);
  if (time1.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/3`).then((res) => { const val = res.data; setTime3(val); });
  }

  const [time4, setTime4] = React.useState([]);
  if (time1.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/4`).then((res) => { const val = res.data; setTime4(val); });
  }

  const [time5, setTime5] = React.useState([]);
  if (time1.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/5`).then((res) => { const val = res.data; setTime5(val); });
  }

  if (timetable.length === 0) {
    timetable.push(time1);
    timetable.push(time2);
    timetable.push(time3);
    timetable.push(time4);
    timetable.push(time5);
  }

  const [artist1, setArtist1] = React.useState([]);
  const [artist2, setArtist2] = React.useState([]);
  const [artist3, setArtist3] = React.useState([]);
  const [artist4, setArtist4] = React.useState([]);
  const [artist5, setArtist5] = React.useState([]);
  const [artist6, setArtist6] = React.useState([]);
  const [artist7, setArtist7] = React.useState([]);
  const [artist8, setArtist8] = React.useState([]);
  const [artist9, setArtist9] = React.useState([]);
  const [artist10, setArtist10] = React.useState([]);
  const [artist11, setArtist11] = React.useState([]);
  const [artist12, setArtist12] = React.useState([]);
  const [artist13, setArtist13] = React.useState([]);
  const [artist14, setArtist14] = React.useState([]);
  const [artist15, setArtist15] = React.useState([]);
  const [artist16, setArtist16] = React.useState([]);
  const [artist17, setArtist17] = React.useState([]);
  const artists = [];

  if (artist1.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/1`).then((res) => { const val = res.data; setArtist1(val); });
  }
  if (artist2.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/2`).then((res) => { const val = res.data; setArtist2(val); });
  }
  if (artist3.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/3`).then((res) => { const val = res.data; setArtist3(val); });
  }
  if (artist4.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/4`).then((res) => { const val = res.data; setArtist4(val); });
  }
  if (artist5.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/5`).then((res) => { const val = res.data; setArtist5(val); });
  }
  if (artist6.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/6`).then((res) => { const val = res.data; setArtist6(val); });
  }
  if (artist7.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/7`).then((res) => { const val = res.data; setArtist7(val); });
  }
  if (artist8.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/8`).then((res) => { const val = res.data; setArtist8(val); });
  }
  if (artist9.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/9`).then((res) => { const val = res.data; setArtist9(val); });
  }
  if (artist10.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/10`).then((res) => { const val = res.data; setArtist10(val); });
  }
  if (artist11.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/11`).then((res) => { const val = res.data; setArtist11(val); });
  }
  if (artist12.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/12`).then((res) => { const val = res.data; setArtist12(val); });
  }
  if (artist13.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/13`).then((res) => { const val = res.data; setArtist13(val); });
  }
  if (artist14.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/14`).then((res) => { const val = res.data; setArtist14(val); });
  }
  if (artist15.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/15`).then((res) => { const val = res.data; setArtist15(val); });
  }
  if (artist16.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/16`).then((res) => { const val = res.data; setArtist16(val); });
  }
  if (artist17.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/17`).then((res) => { const val = res.data; setArtist17(val); });
  }

  if (artists.length === 0) {
    artists.push(artist1);
    artists.push(artist2);
    artists.push(artist3);
    artists.push(artist4);
    artists.push(artist5);
    artists.push(artist6);
    artists.push(artist7);
    artists.push(artist8);
    artists.push(artist9);
    artists.push(artist10);
    artists.push(artist11);
    artists.push(artist12);
    artists.push(artist13);
    artists.push(artist14);
    artists.push(artist15);
    artists.push(artist16);
    artists.push(artist17);
  }

  useEffect(() => {
    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(ProgramPictureMap[programSlug].programNameEN);
        if (element) {
          element.scrollIntoView();
          if (window.innerWidth >= 1024) {
            window.scrollBy(0, -70);
          } else {
            window.scrollBy(0, -5);
          }
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

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
