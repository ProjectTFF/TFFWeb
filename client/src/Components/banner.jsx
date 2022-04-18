import React from 'react';
import ShowHideNav from '../Helpers/showHideNav';
import '../Assets/Styles/banner.css';

function Banner(props) {
   const {
      bannerTitle, bannerHall, language, handleSetLanguage,
     } = props;

   return (
     <>
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
       <ShowHideNav
         language={language}
         handleSetLanguage={handleSetLanguage}
       />
       <div className="margin">
         .
       </div>
     </>
  );
}

export default Banner;
