import React from 'react';
import { NavLink } from 'react-router-dom';
import { Artist } from '../Components/artist';
import Arrow from '../Assets/Images/Arrow.svg';
import imageMap from '../Helpers/artistsMap';

import '../Assets/Styles/artists.css';

function Artists() {
  return (
    <div className="artists">
      <h1>Artists</h1>
      <ul>
        <li>
          <Artist
            artistName="Annaleena Jämsä"
            artistPlace="Tampere, FI"
            artistRole="Alto Flute"
            artistPicture={imageMap.Annaleena}
          />
        </li>
        <li>
          <Artist
            artistName="Astrid Bjelland"
            artistPlace="Tampere, FI"
            artistRole="Eb Soprano Flute"
            artistPicture={imageMap.Astrid}
          />
        </li>
        <li>
          <Artist
            artistName="Fabian Egger"
            artistPlace="Tampere, FI"
            artistRole="Bass Flute"
            artistPicture={imageMap.Fabian}
          />
        </li>
        <li>
          <Artist
            artistName="Sebastian Jacot"
            artistPlace="Tampere, FI"
            artistRole="Alto Flute"
            artistPicture={imageMap.Sebastian}
          />
        </li>
      </ul>

      <div className="bottom-gradient">
        <NavLink className="nav-link" to="/tickets_and_streaming">
          Buy tickets
          <img className="arrow" src={Arrow} alt=">" />
        </NavLink>
      </div>
    </div>
  );
}

export default Artists;
