import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import '../Assets/Styles/sectionHeader.css';

function SectionHeader(props) {
   const { sectionTitle, showAll } = props;
   return (
     <div className="section-title-block">
       <h2>{sectionTitle}</h2>
       { showAll
        ? (
          <div className="link-wrap">
            <a href="#url">
              See All
              {' '}
              <KeyboardDoubleArrowRightIcon />
            </a>
          </div>
       ) : <div />}
     </div>
    );
}

export default SectionHeader;
