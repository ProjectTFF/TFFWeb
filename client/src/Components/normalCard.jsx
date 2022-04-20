import React from 'react';
import '../Assets/Styles/normalCard.css';
import KidsImage from '../Assets/Images/event-kids.jpg';
import YouthImage from '../Assets/Images/event-youth.jpg';
import JaaImage from '../Assets/Images/event-jaa.jpg';
import YouthPdf from '../Assets/Pdf/Youth.pdf';
import NuoretPdf from '../Assets/Pdf/Nuoret.pdf';

function NormalCard(props) {
  const {
    language,
  } = props;

  let content = {
    english: {
      title1: 'TFF Kids',
      title2: 'TFF Youth',
      title3: 'TFF JÄÄ',
      videoLink: 'https://youtu.be/EdNHwQ1p8pM',
      youthPdfLink: YouthPdf,
      jaaPdfLink: 'https://tampereflutefest.com/wp-content/uploads/2022/02/TFF-ICE.pdf',
    },
    finnish: {
     title1: 'TFF Lapset',
     title2: 'TFF Nuoret',
     title3: 'TFF JÄÄ',
     videoLink: 'https://youtu.be/EdNHwQ1p8pM',
     youthPdfLink: NuoretPdf,
     jaaPdfLink: 'https://tampereflutefest.com/wp-content/uploads/2022/02/TFF-ICE.pdf',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);

  return (
    <div className="card-row">
      <div className="card-col">
        <a className="img-wrap" href={content.videoLink} target="_blank" rel="noreferrer">
          <img src={KidsImage} alt="" />
        </a>
        <h2>{content.title1}</h2>
      </div>
      <div className="card-col youth-col">
        <a className="img-wrap" href={content.youthPdfLink} target="_blank" rel="noreferrer">
          <img src={YouthImage} alt="" />
        </a>
        <h2>{content.title2}</h2>
      </div>
      <div className="card-col">
        <a className="img-wrap" href={content.jaaPdfLink} target="_blank" rel="noreferrer">
          <img src={JaaImage} alt="" />
        </a>
        <h2>{content.title3}</h2>
      </div>
    </div>

   );
}

export default NormalCard;
