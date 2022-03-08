import React from 'react';
import '../Assets/Styles/programCard.css';

function ProgramCard(props) {
   const { cardImage, cardTitle, cardName } = props;
   return (
     <div className="program-card-col">
       <a href="#url" className="program-card-block">
         <div className="img-wrap">
           <img src={cardImage} alt="" />
         </div>
         <span className="card-name">{cardName}</span>
         <strong className="card-title">{cardTitle}</strong>
       </a>
     </div>

   );
}

export default ProgramCard;
