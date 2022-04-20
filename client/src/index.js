import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
    const [loader, setLoader] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoader(false);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);

  return (
    <div className="wrapper">
      {loader
        ? <Loader />
        : (
          <Router>
            <Routes>
              <Route path="/" element={<Home language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
              {/* <Route path="/contest" element={<Contest />} /> */}
              {/* <Route path="/contribute" element={<Contribute />} /> */}
              <Route path="/programme">
                <Route path="" element={<Programme language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
                <Route path=":programSlug" element={<Programme language={language} handleSetLanguage={(l) => { setLanguage(l); }} anchor />} />
              </Route>
              <Route path="/tickets_and_streaming" element={<Tickets language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
              <Route path="/venue" element={<Venue language={language} />} handleSetLanguage={(l) => { setLanguage(l); }} />
              <Route path="/artistCompetitionFinalist" element={<ArtistCompetitionFinalist language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
              <Route path="/artists">
                <Route path="" element={<Artists language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
                <Route path=":artistSlug" element={<ArtistPage language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
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
