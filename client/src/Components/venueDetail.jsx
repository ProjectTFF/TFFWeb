import React from 'react';
import '../Assets/Styles/venue.css';

function VenueDetail(props) {
   const {
 venueHomeLink, venueName, venueAddress, venueMapLink,
} = props;
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
           <a href={venueMapLink} target="_blank" rel="noreferrer">Show on map</a>
         </li>
       </ul>
     </div>
   );
}

export default VenueDetail;
