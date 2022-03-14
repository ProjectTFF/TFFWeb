import React from 'react';

import { NavMenu } from '../Components/navMenu';
import { Button } from '../Components/navButton';
import OpenBurger from '../Assets/Images/MenuOpenIcon.svg';
import '../Assets/Styles/showHideNav.css';

function ShowHideNav() {
  const [show, setShow] = React.useState(false);

  const changeState = () => { setShow(!show); };

  return (
    <div className="topgradient">
      {
      show
      ? (
        <div>
          <NavMenu changeState={changeState} />
          <button
            className="quit-menu-button"
            type="button"
            onClick={changeState}
          >
            .
          </button>
        </div>
      ) : (
        <Button
          buttonStyle="btn--left"
          onClick={changeState}
        >
          <img src={OpenBurger} alt="Nav Open" />
        </Button>
      )
      }

      <a className="bookmark" href="https://tampereflutefest.com/festival-2022/">
        BOOKMARK
      </a>
    </div>

  );
}

export default ShowHideNav;
