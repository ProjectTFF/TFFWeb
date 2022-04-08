import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../Assets/Styles/button.css';

function DefaultButton(props) {
  const { buttonText, showIcon } = props;
  return (
    <a href="https://www.youtube.com" target="_blank" className="btn btn-default" rel="noreferrer">
      {buttonText}
      {
        showIcon && <ChevronRightIcon />
      }
    </a>
  );
}

export default DefaultButton;
