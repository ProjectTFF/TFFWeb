import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink } from 'react-router-dom';
import '../Assets/Styles/sectionHeader.css';

function SectionHeader(props) {
   const {
     sectionTitle, showAll, pageLink, language,
    } = props;

   // Content of the page by language
   let content = {
     english: {
       all: 'See All ',
     },
     finnish: {
       all: 'Näytä kaikki',
     },
   };

   content = language === 'finnish' ? (content.finnish) : (content.english);
   return (
     <div className="section-title-block">
       <h2>{sectionTitle}</h2>
       { showAll
        ? (
          <div className="link-wrap">
            <NavLink className="link" to={`/${pageLink}`}>
              {content.all}
              <KeyboardDoubleArrowRightIcon />
            </NavLink>
          </div>
       ) : <div />}
     </div>
    );
}

export default SectionHeader;
