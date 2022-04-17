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
      }, 2000);
      return () => clearTimeout(timer);
    }, []);

  return (
    <div className="wrapper">
      {loader
        ? <Loader />
        : (
          <Router>
            <Routes>
              <Route path="/" element={<Home language={language} />} />
              {/* <Route path="/contest" element={<Contest />} /> */}
              {/* <Route path="/contribute" element={<Contribute />} /> */}
              <Route path="/programme">
                <Route path="" element={<Programme language={language} />} />
                <Route path=":programSlug" element={<ProgramDetail language={language} />} />
              </Route>
              <Route path="/tickets_and_streaming" element={<Tickets language={language} />} />
              <Route path="/venue" element={<Venue language={language} />} />
              <Route path="/artistCompetitionFinalist" element={<ArtistCompetitionFinalist language={language} />} />
              <Route path="/artists">
                <Route path="" element={<Artists language={language} />} />
                <Route path=":artistSlug" element={<ArtistPage language={language} />} />
              </Route>
              <Route path="/programs">
                <Route path=":artistSlug" element={<ProgramDetail language={language} />} />
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
