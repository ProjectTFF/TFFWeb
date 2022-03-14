import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../Assets/Styles/defaultButton.css';

function DefaultButton() {
  return (
    <div className="button-wrap">
      <a href="#url" className="btn-default">
        buy ticket
        <ChevronRightIcon />
      </a>
    </div>
  );
}

export default DefaultButton;
