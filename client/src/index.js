import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/Styles/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowHideNav from './Helpers/showHideNav';
// import './Assets/Styles/index.css';

import {
  ArtistPage, Artists, Contest, Contribute, Home, Programme, Tickets, Venue,
} from './Pages';

ReactDOM.render(
  <Router>
    <ShowHideNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contest" element={<Contest />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/programme" element={<Programme />} />
      <Route path="/tickets_and_streaming" element={<Tickets />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/artists">
        <Route path="" element={<Artists />} />
        <Route path=":artistSlug" element={<ArtistPage />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root'),
);
