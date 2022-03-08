import React from 'react';

import { NavMenu } from '../Components/navMenu';
import { Button } from '../Components/navButton';
import OpenBurger from '../Assets/Images/MenuOpenIcon.svg';
import '../Assets/Styles/showHideNav.css';

function ShowHideNav() {
  const [show, setShow] = React.useState(false);

  const changeState = () => { setShow(!show); };

  return (
    <div className="header-holder">
      {show
    ? (
      <div className="nav-drop">
        <NavMenu changeState={changeState} />
      </div>
    ) : (
      <div className="nav-opener">
        <Button
          buttonStyle="menu--open"
          onClick={changeState}
        >
          <img src={OpenBurger} alt="Nav Open" />
        </Button>
      </div>
    )}
      <a className="bookmark" href="https://tampereflutefest.com/festival-2022/">
        BOOKMARK
      </a>
    </div>
  );

}

export default ShowHideNav;
