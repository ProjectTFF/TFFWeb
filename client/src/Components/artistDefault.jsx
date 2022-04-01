import React from 'react';
import axios from 'axios';
import '../Assets/Styles/artistDefault.css';
import { Link } from 'react-router-dom';
import { ArtistPictureMap } from '../Helpers/ArtistPictureMap';

function ArtistCollection(props) {
   const {
  artistId,
} = props;

   /**
   * Get information from backend (This artist)
   */
   const [artist, setArtist] = React.useState([]);
   if (artist.length === 0) {
      axios.get(`http://localhost:3001/api/artist/${artistId}`).then((res) => { const val = res.data; setArtist(val); });
   }

   return (
     <div className="artist-info-col">
       <Link className="artist-info-block" to={`/artists/${artistId}`}>
         <div className="img-wrap">
           <img src={ArtistPictureMap[artistId - 1].programImage} alt="s" />
         </div>
         <span className="artist-name">{`${artist.firstname} ${artist.lastname}`}</span>
       </Link>
     </div>
   );
}

export default ArtistCollection;
