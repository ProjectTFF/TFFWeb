import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink } from 'react-router-dom';
import '../Assets/Styles/sectionHeader.css';

function SectionHeader(props) {
   const { sectionTitle, showAll, pageLink } = props;
   return (
     <div className="section-title-block">
       <h2>{sectionTitle}</h2>
       { showAll
        ? (
          <div className="link-wrap">
            <NavLink className="link" to={`/${pageLink}`}>
              See All
              {' '}
              <KeyboardDoubleArrowRightIcon />
            </NavLink>
          </div>
       ) : <div />}
     </div>
    );
}

export default SectionHeader;
