import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../Assets/Styles/button.css';

function PrimaryButton(props) {
  const { buttonText, showIcon, url } = props;
  return (
    <a href={url} target="_blank" className="btn btn-primary" rel="noreferrer">
      {buttonText}
      {
        showIcon && <ChevronRightIcon />
      }
    </a>
  );
}

export default PrimaryButton;
