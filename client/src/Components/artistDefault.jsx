import React from 'react';
import '../Assets/Styles/artistDefault.css';

function ArtistCollection(props) {
   const {
 artistImage, artistRole, artistName, artistAddress,
} = props;
   return (
     <div className="artist-info-col">
       <a href="#url" className="artist-info-block">
         <div className="img-wrap">
           <img src={artistImage} alt="" />
         </div>
         <span className="artist-role">{artistRole}</span>
         <span className="artist-name">{artistName}</span>
         <span className="artist-address">{artistAddress}</span>
       </a>
     </div>
   );
}

export default ArtistCollection;
