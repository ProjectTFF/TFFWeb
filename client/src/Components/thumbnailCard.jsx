import React, { useState } from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ModalVideo from 'react-modal-video';
import '../Assets/Styles/thumbnailCard.css';

function ThumbnailCard(props) {
   const { cardImage, videoId } = props;
   const [isOpen, setOpen] = useState(false);
   return (

     <div className="thumbnail-col">
       <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
       <div className="thumbnail-block">
         <a href="#url" className="thumbnail-img" onClick={() => setOpen(true)}>
           <img src={cardImage} alt="" />
           <PlayCircleFilledWhiteIcon />
         </a>
       </div>
     </div>

   );
}

export default ThumbnailCard;
