import React from 'react';
import '../Assets/Styles/venue.css';

function VenueDetail(props) {
   const {
 venueHomeLink, venueName, venueAddress, venueMapLink, language,
} = props;

   // Content of the page by language
   let content = {
     english: {
       map: 'Show on map',
     },
     finnish: {
       map: 'Show on map (Finnish)',
     },
   };

   content = language === 'finnish' ? (content.finnish) : (content.english);
   return (
     <div className="venue-col">
       <ul>
         <li>
           <a href={venueHomeLink} className="venue-home" target="_blank" rel="noreferrer">{venueName}</a>
         </li>
         <li>
           <address>{venueAddress}</address>
         </li>
         <li>
           <a href={venueMapLink} target="_blank" rel="noreferrer">{content.map}</a>
         </li>
       </ul>
     </div>
   );
}

export default VenueDetail;
