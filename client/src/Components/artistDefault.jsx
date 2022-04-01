import React from 'react';
import axios from 'axios';
import '../Assets/Styles/artistDefault.css';
import { Link } from 'react-router-dom';

function ArtistCollection(props) {
   const {
  artistId, artistImage,
} = props;

   /**
   * Get information from backend (This artist)
   */
   const [artist, setArtist] = React.useState([]);
   const changeState = (prop) => { setArtist(prop); };
   if (artist.length === 0) {
      axios.get(`http://localhost:3001/api/artist/${artistId}`).then((res) => { const val = res.data; changeState(val); });
   }

   return (

     <div className="artist-info-col">
       <Link className="artist-info-block" to={`/artists/${artistId}`}>
         <div className="img-wrap">
           <img src={artistImage} alt="" />
         </div>
         <span className="artist-name">{`${artist.firstname} ${artist.lastname}`}</span>
       </Link>
     </div>
   );
}

export default ArtistCollection;
