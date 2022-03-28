import React from 'react';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../Assets/Styles/button.css';

function PrimaryButton(props) {
  const { buttonText } = props;
  return (
    <Link to="/tickets_and_streaming" className="btn btn-primary">
      {buttonText}
      <ChevronRightIcon />
    </Link>
  );
}

export default PrimaryButton;
