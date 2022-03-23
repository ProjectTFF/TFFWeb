import React from 'react';
import '../Assets/Styles/sponsors.css';

function SponsorDetail(props) {
   const { sponsorImage, sponsorLink } = props;
   return (
     <li>
       <a href={sponsorLink} className="sponsor-image" target="_blank" rel="noreferrer">
         <img src={sponsorImage} alt="" />
       </a>
     </li>
   );
}

export default SponsorDetail;
