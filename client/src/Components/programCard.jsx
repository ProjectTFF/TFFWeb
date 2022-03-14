import React from 'react';
import '../Assets/Styles/programCard.css';
import { Link } from 'react-router-dom';

function ProgramCard(props) {
   const { cardImage, cardTitle, cardName } = props;
   return (
     <div className="program-card-col">
       <Link to={`/programme/${cardName}`} className="program-card-block">
         <div className="img-wrap">
           <img src={cardImage} alt="" />
         </div>
         <span className="card-name">{cardName}</span>
         <strong className="card-title">{cardTitle}</strong>
       </Link>
     </div>

   );
}

export default ProgramCard;
