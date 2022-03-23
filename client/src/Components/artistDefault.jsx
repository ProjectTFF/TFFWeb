import React from 'react';
import '../Assets/Styles/artistDefault.css';
import { Link } from 'react-router-dom';

function ArtistCollection(props) {
   const {
 artistImage, artistRole, artistName, artistAddress,
} = props;

   return (

     <div className="artist-info-col">
       <Link className="artist-info-block" to={`/artists/${artistName}`}>
         <div className="img-wrap">
           <img src={artistImage} alt="" />
         </div>
         <span className="artist-role">{artistRole}</span>
         <span className="artist-name">{artistName}</span>
         <span className="artist-address">{artistAddress}</span>
       </Link>
     </div>
   );
}

export default ArtistCollection;
