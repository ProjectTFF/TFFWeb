import React from 'react';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../Assets/Styles/defaultButton.css';

function DefaultButton() {
  return (
    <div className="button-wrap">
      <Link to="/tickets_and_streaming" className="btn-default">
        buy ticket
        <ChevronRightIcon />
      </Link>
    </div>
  );
}

export default DefaultButton;
