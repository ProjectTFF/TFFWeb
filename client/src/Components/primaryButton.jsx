import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../Assets/Styles/button.css';

function PrimaryButton(props) {
  const { buttonText, showIcon } = props;
  return (
    <a href="https://www.tampere-talo.fi/tapahtumat/tampere-flute-fest-2022/" target="_blank" className="btn btn-primary" rel="noreferrer">
      {buttonText}
      {
        showIcon && <ChevronRightIcon />
      }
    </a>
  );
}

export default PrimaryButton;
