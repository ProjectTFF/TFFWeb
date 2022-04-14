import React from 'react';

function Banner(props) {
   const {
      bannerTitle, bannerHall,
     } = props;

   return (
     <div className="dashboard-banner inner-page-banner">
       <div className="dashboard-content">
         <span className="top-text">{bannerTitle}</span>
         <h1>ICE · JÄÄ</h1>
         <span className="meta-text">
           22.-24.4.2022 @
           {bannerHall}
         </span>
       </div>
     </div>
  );
}

export default Banner;
