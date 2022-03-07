import React from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import '../Assets/Styles/thumbnailCard.css';

function ThumbnailCard(props) {
   const { cardImage } = props;
   return (
     <div className="thumbnail-col">
       <div className="thumbnail-block">
         <a href="#url" className="thumbnail-img">
           <img src={cardImage} alt="" />
           <PlayCircleFilledWhiteIcon />
         </a>
       </div>
     </div>
   );
}

export default ThumbnailCard;
