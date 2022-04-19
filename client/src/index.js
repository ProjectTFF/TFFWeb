import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Assets/Styles/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/footer';
import Loader from './Components/loader';

import {
  ArtistPage, Artists, Home, Programme, Tickets,
  Venue, ProgramDetail, ErrorPage, ArtistCompetitionFinalist,
} from './Pages';

function App() {
  const [language, setLanguage] = React.useState('english');

  /**
  * page loader
  */

  const [loader, setLoader] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  /**
   * Get information from backend
   */
  const artistNumber = 12;
  const performanceNumber = 17;
  const programmeNumber = 5;

  const artistsInfo = [];
  const links = [];
  const timetable = [];
  const progArtists = [];
  // ---
  const [artists, setArtists] = React.useState([]);
  const [programmes, setProgrammes] = React.useState([]);
  // ---
  const [callingQuery, setCallingQuery] = React.useState(true);
  useEffect(() => {
    if (callingQuery
      && artistsInfo.length === artistNumber
      && links.length === artistNumber
      && timetable.length === programmeNumber
      && progArtists.length === performanceNumber
      && artists.length === artistNumber
      && programmes.length === programmeNumber) {
        setCallingQuery(false);
    }
  }, [artistsInfo, links, timetable, progArtists, artists, programmes]);
  // ---
  const [artist1Info, setArtist1Info] = React.useState([]);
  const [artist2Info, setArtist2Info] = React.useState([]);
  const [artist3Info, setArtist3Info] = React.useState([]);
  const [artist4Info, setArtist4Info] = React.useState([]);
  const [artist5Info, setArtist5Info] = React.useState([]);
  const [artist6Info, setArtist6Info] = React.useState([]);
  const [artist7Info, setArtist7Info] = React.useState([]);
  const [artist8Info, setArtist8Info] = React.useState([]);
  const [artist9Info, setArtist9Info] = React.useState([]);
  const [artist10Info, setArtist10Info] = React.useState([]);
  const [artist11Info, setArtist11Info] = React.useState([]);
  const [artist12Info, setArtist12Info] = React.useState([]);

  const [link1, setLink1] = React.useState([]);
  const [link2, setLink2] = React.useState([]);
  const [link3, setLink3] = React.useState([]);
  const [link4, setLink4] = React.useState([]);
  const [link5, setLink5] = React.useState([]);
  const [link6, setLink6] = React.useState([]);
  const [link7, setLink7] = React.useState([]);
  const [link8, setLink8] = React.useState([]);
  const [link9, setLink9] = React.useState([]);
  const [link10, setLink10] = React.useState([]);
  const [link11, setLink11] = React.useState([]);
  const [link12, setLink12] = React.useState([]);
  // ---
  const [time1, setTime1] = React.useState([]);
  const [time2, setTime2] = React.useState([]);
  const [time3, setTime3] = React.useState([]);
  const [time4, setTime4] = React.useState([]);
  const [time5, setTime5] = React.useState([]);
  // ---
  const [progArtist1, setProgArtist1] = React.useState([]);
  const [progArtist2, setProgArtist2] = React.useState([]);
  const [progArtist3, setProgArtist3] = React.useState([]);
  const [progArtist4, setProgArtist4] = React.useState([]);
  const [progArtist5, setProgArtist5] = React.useState([]);
  const [progArtist6, setProgArtist6] = React.useState([]);
  const [progArtist7, setProgArtist7] = React.useState([]);
  const [progArtist8, setProgArtist8] = React.useState([]);
  const [progArtist9, setProgArtist9] = React.useState([]);
  const [progArtist10, setProgArtist10] = React.useState([]);
  const [progArtist11, setProgArtist11] = React.useState([]);
  const [progArtist12, setProgArtist12] = React.useState([]);
  const [progArtist13, setProgArtist13] = React.useState([]);
  const [progArtist14, setProgArtist14] = React.useState([]);
  const [progArtist15, setProgArtist15] = React.useState([]);
  const [progArtist16, setProgArtist16] = React.useState([]);
  const [progArtist17, setProgArtist17] = React.useState([]);
  // ----------------------------------------------
  if (artists.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist`).then((res) => { const val = res.data; setArtists(val); });
  }
  if (programmes.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/allprogrammes`).then((res) => { const val = res.data; setProgrammes(val); });
  }
  // ---
  if (artist1Info.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/1`).then((res) => { const val = res.data; setArtist1Info(val); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/1`).then((res) => { const val = res.data; setLink1(val); });
  }
  if (artist2Info.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/2`).then((res) => { const val = res.data; setArtist2Info(val); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/2`).then((res) => { const val = res.data; setLink2(val); });
  }
  if (artist3Info.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/3`).then((res) => { const val = res.data; setArtist3Info(val); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/3`).then((res) => { const val = res.data; setLink3(val); });
  }
  if (artist4Info.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/4`).then((res) => { const val = res.data; setArtist4Info(val); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/4`).then((res) => { const val = res.data; setLink4(val); });
  }
  if (artist5Info.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/5`).then((res) => { const val = res.data; setArtist5Info(val); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/5`).then((res) => { const val = res.data; setLink5(val); });
  }
  if (artist6Info.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/6`).then((res) => { const val = res.data; setArtist6Info(val); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/6`).then((res) => { const val = res.data; setLink6(val); });
  }
  if (artist7Info.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/7`).then((res) => { const val = res.data; setArtist7Info(val); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/7`).then((res) => { const val = res.data; setLink7(val); });
  }
  if (artist8Info.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/8`).then((res) => { const val = res.data; setArtist8Info(val); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/8`).then((res) => { const val = res.data; setLink8(val); });
  }
  if (artist9Info.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/9`).then((res) => { const val = res.data; setArtist9Info(val); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/9`).then((res) => { const val = res.data; setLink9(val); });
  }
  if (artist10Info.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/10`).then((res) => { const val = res.data; setArtist10Info(val); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/10`).then((res) => { const val = res.data; setLink10(val); });
  }
  if (artist11Info.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/11`).then((res) => { const val = res.data; setArtist11Info(val); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/11`).then((res) => { const val = res.data; setLink11(val); });
  }
  if (artist12Info.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/12`).then((res) => { const val = res.data; setArtist12Info(val); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/12`).then((res) => { const val = res.data; setLink12(val); });
  }
  // ---
  if (time1.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/1`).then((res) => { const val = res.data; setTime1(val); });
  }
  if (time2.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/2`).then((res) => { const val = res.data; setTime2(val); });
  }
  if (time3.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/3`).then((res) => { const val = res.data; setTime3(val); });
  }
  if (time4.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/4`).then((res) => { const val = res.data; setTime4(val); });
  }
  if (time5.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/5`).then((res) => { const val = res.data; setTime5(val); });
  }
  // ---
  if (progArtist1.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/1`).then((res) => { const val = res.data; setProgArtist1(val); });
  }
  if (progArtist2.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/2`).then((res) => { const val = res.data; setProgArtist2(val); });
  }
  if (progArtist3.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/3`).then((res) => { const val = res.data; setProgArtist3(val); });
  }
  if (progArtist4.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/4`).then((res) => { const val = res.data; setProgArtist4(val); });
  }
  if (progArtist5.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/5`).then((res) => { const val = res.data; setProgArtist5(val); });
  }
  if (progArtist6.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/6`).then((res) => { const val = res.data; setProgArtist6(val); });
  }
  if (progArtist7.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/7`).then((res) => { const val = res.data; setProgArtist7(val); });
  }
  if (progArtist8.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/8`).then((res) => { const val = res.data; setProgArtist8(val); });
  }
  if (progArtist9.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/9`).then((res) => { const val = res.data; setProgArtist9(val); });
  }
  if (progArtist10.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/10`).then((res) => { const val = res.data; setProgArtist10(val); });
  }
  if (progArtist11.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/11`).then((res) => { const val = res.data; setProgArtist11(val); });
  }
  if (progArtist12.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/12`).then((res) => { const val = res.data; setProgArtist12(val); });
  }
  if (progArtist13.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/13`).then((res) => { const val = res.data; setProgArtist13(val); });
  }
  if (progArtist14.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/14`).then((res) => { const val = res.data; setProgArtist14(val); });
  }
  if (progArtist15.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/15`).then((res) => { const val = res.data; setProgArtist15(val); });
  }
  if (progArtist16.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/16`).then((res) => { const val = res.data; setProgArtist16(val); });
  }
  if (progArtist17.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/programme/artists/17`).then((res) => { const val = res.data; setProgArtist17(val); });
  }
  // ---
  if (artistsInfo.length === 0) {
    artistsInfo.push(artist1Info);
    artistsInfo.push(artist2Info);
    artistsInfo.push(artist3Info);
    artistsInfo.push(artist4Info);
    artistsInfo.push(artist5Info);
    artistsInfo.push(artist6Info);
    artistsInfo.push(artist7Info);
    artistsInfo.push(artist8Info);
    artistsInfo.push(artist9Info);
    artistsInfo.push(artist10Info);
    artistsInfo.push(artist11Info);
    artistsInfo.push(artist12Info);
  }
  if (links.length === 0) {
    links.push(link1);
    links.push(link2);
    links.push(link3);
    links.push(link4);
    links.push(link5);
    links.push(link6);
    links.push(link7);
    links.push(link8);
    links.push(link9);
    links.push(link10);
    links.push(link11);
    links.push(link12);
  }
  if (timetable.length === 0) {
    timetable.push(time1);
    timetable.push(time2);
    timetable.push(time3);
    timetable.push(time4);
    timetable.push(time5);
  }
  if (progArtists.length === 0) {
    progArtists.push(progArtist1);
    progArtists.push(progArtist2);
    progArtists.push(progArtist3);
    progArtists.push(progArtist4);
    progArtists.push(progArtist5);
    progArtists.push(progArtist6);
    progArtists.push(progArtist7);
    progArtists.push(progArtist8);
    progArtists.push(progArtist9);
    progArtists.push(progArtist10);
    progArtists.push(progArtist11);
    progArtists.push(progArtist12);
    progArtists.push(progArtist13);
    progArtists.push(progArtist14);
    progArtists.push(progArtist15);
    progArtists.push(progArtist16);
    progArtists.push(progArtist17);
  }
  // ----------------------------------------------

  return (
    <div className="wrapper">
      {loader || callingQuery ? <Loader />
      : (
        <Router>
          <Routes>
            <Route path="/" element={<Home language={language} handleSetLanguage={(l) => { setLanguage(l); }} artists={artists} />} />
            {/* <Route path="/contest" element={<Contest />} /> */}
            {/* <Route path="/contribute" element={<Contribute />} /> */}
            <Route path="/programme" element={<Programme language={language} handleSetLanguage={(l) => { setLanguage(l); }} programmes={programmes} timetable={timetable} artists={progArtists} />} />
            <Route path="/tickets_and_streaming" element={<Tickets language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
            <Route path="/venue" element={<Venue language={language} />} handleSetLanguage={(l) => { setLanguage(l); }} />
            <Route path="/artistCompetitionFinalist" element={<ArtistCompetitionFinalist language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
            <Route path="/artists">
              <Route path="" element={<Artists language={language} handleSetLanguage={(l) => { setLanguage(l); }} artists={artists} />} />
              <Route path=":artistSlug" element={<ArtistPage language={language} handleSetLanguage={(l) => { setLanguage(l); }} artists={artistsInfo} allLinks={links} />} />
            </Route>
            <Route path="/programs">
              <Route path=":artistSlug" element={<ProgramDetail language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
            </Route>
            <Route path="*" element={<ErrorPage language={language} />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
