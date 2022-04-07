import React from 'react';
import '../Assets/Styles/errorPage.css';
import PrimaryButton from '../Components/primaryButton';

function Programme() {
  return (
    <div className="comingSoon-page-wrapper">
      <div className="comingSoon-page-holder">
        <h1>Coming Soon!</h1>
        <div className="button-wrap">
          <PrimaryButton
            buttonText="buy tickets"
            showIcon
          />
        </div>
      </div>
    </div>
  );
}

export default Programme;
