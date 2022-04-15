import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/Styles/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/footer';

import {
  ArtistPage, Artists, Home, Programme, Tickets,
  Venue, ProgramDetail, ErrorPage, ArtistCompetitionFinalist,
} from './Pages';

function App() {
  const [language, setLanguage] = React.useState('english');

  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
          {/* <Route path="/contest" element={<Contest />} /> */}
          {/* <Route path="/contribute" element={<Contribute />} /> */}
          <Route path="/programme" element={<Programme language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
          <Route path="/tickets_and_streaming" element={<Tickets language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
          <Route path="/venue" element={<Venue language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
          <Route path="/artistCompetitionFinalist" element={<ArtistCompetitionFinalist language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
          <Route path="/artists">
            <Route path="" element={<Artists language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
            <Route path=":artistSlug" element={<ArtistPage language={language} handleSetLanguage={(l) => { setLanguage(l); }} />} />
          </Route>
          <Route path="/programs">
            <Route path=":artistSlug" element={<ProgramDetail language={language} />} />
          </Route>
          <Route path="*" element={<ErrorPage language={language} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
