import React from 'react';

import { NavMenu } from '../Components/navMenu';
import { Button } from '../Components/navButton';
import OpenBurger from '../Assets/Images/MenuOpenIcon.svg';

function ShowHideNav() {
  const [show, setShow] = React.useState(false);

  const changeState = () => { setShow(!show); };

  return (
    show
    ? (
      <div>
        <NavMenu changeState={changeState} />
      </div>
    ) : (
      <Button
        buttonStyle="btn--left"
        onClick={changeState}
      >
        <img src={OpenBurger} alt="Nav Open" />
      </Button>
    )
  );
}

export default ShowHideNav;
