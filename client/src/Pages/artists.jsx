import React from 'react';
import { Artist } from '../Components/artist';
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
        <li>
          <Artist
            artistName="Sebastian Jacot"
            artistPlace="Tampere, FI"
            artistRole="Alto Flute"
            artistPicture={imageMap.Sebastian}
          />
        </li>
      </ul>
    </div>
  );
}

export default Artists;
