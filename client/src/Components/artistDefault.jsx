import React from 'react';
import '../Assets/Styles/artistDefault.css';
import { Link } from 'react-router-dom';

function ArtistCollection(props) {
   const {
 artistImage, artistName,
} = props;

   return (

     <div className="artist-info-col">
       <Link className="artist-info-block" to={`/artists/${artistName}`}>
         <div className="img-wrap">
           <img src={artistImage} alt="" />
         </div>
         <span className="artist-name">{artistName}</span>
       </Link>
     </div>
   );
}

export default ArtistCollection;
