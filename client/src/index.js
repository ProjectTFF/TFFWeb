import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/Styles/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowHideNav from './Helpers/showHideNav';

import {
  ArtistPage, Artists, Contest, Contribute, Home, Programme, Tickets,
  Venue, ProgramDetail, ErrorPage,
} from './Pages';

ReactDOM.render(
  <Router>
    <div className="wrapper">
      <ShowHideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/programme">
          <Route path="" element={<Programme />} />
          <Route path=":programSlug" element={<ProgramDetail />} />
        </Route>
        <Route path="/tickets_and_streaming" element={<Tickets />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/artists">
          <Route path="" element={<Artists />} />
          <Route path=":artistSlug" element={<ArtistPage />} />
        </Route>
        <Route path="/programs">
          <Route path=":artistSlug" element={<ProgramDetail />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  </Router>,
  document.getElementById('root'),
);
