import React from 'react';
import '../Assets/Styles/normalCard.css';

function NormalCard(props) {
   const { cardTitle, cardImage } = props;
   return (
     <div className="card-col">
       <a className="img-wrap" href="#url">
         <img src={cardImage} alt="" />
       </a>
       <h2>{cardTitle}</h2>
     </div>

   );
}

export default NormalCard;
