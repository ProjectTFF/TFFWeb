import React from 'react';
import '../Assets/Styles/normalCard.css';

function NormalCard(props) {
   const { cardTitle, cardImage, cardLink } = props;
   return (
     <div className="card-col">
       <a className="img-wrap" href={cardLink} target="_blank" rel="noreferrer">
         <img src={cardImage} alt="" />
       </a>
       <h2>{cardTitle}</h2>
     </div>

   );
}

export default NormalCard;
