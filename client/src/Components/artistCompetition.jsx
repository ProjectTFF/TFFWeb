import React from 'react';
import '../Assets/Styles/competitionFinalist.css';

function ArtistCompetition(props) {
   const {
 artistName, artistImage, artistDetail1, artistDetail2, artistDetail3,
} = props;

   return (
     <div className="competition-info-col">
       <div className="img-wrap">
         <img src={artistImage} alt="" />
       </div>
       <div className="competition-info-body">
         <span className="artist-name">{artistName}</span>
         <ul className="artist-detail">
           <li>{artistDetail1}</li>
           <li>{artistDetail2}</li>
           <li>{artistDetail3}</li>
         </ul>
       </div>
     </div>
   );
}

export default ArtistCompetition;
