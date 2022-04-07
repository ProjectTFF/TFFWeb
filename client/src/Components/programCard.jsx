import React from 'react';
import '../Assets/Styles/programCard.css';

function ProgramCard(props) {
   const { cardImage, cardTitle, language } = props;

   // Content of the page by language
   let content = {
    english: {
      soon: 'Coming Soon!',
    },
    finnish: {
      soon: 'Coming Soon! (Finnish)',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);
   return (
     <div className="program-card-col">
       <div className="program-card-block">
         <div className="img-wrap">
           <img src={cardImage} alt="" />
         </div>
         {/* <span className="card-name">{cardName}</span> */}
         <strong className="card-title">{cardTitle === 'Coming Soon!' ? content.soon : cardTitle}</strong>
       </div>
     </div>

   );
}

export default ProgramCard;
