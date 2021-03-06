import React, { useEffect } from 'react';
import ModalButton from '../Components/modalButton';
import { NavMenu } from '../Components/navMenu';
import { Button } from '../Components/navButton';
import OpenBurger from '../Assets/Images/MenuOpenIcon.svg';
import '../Assets/Styles/showHideNav.css';

function ShowHideNav(props) {
  const {
    language, handleSetLanguage,
   } = props;

  const [show, setShow] = React.useState(false);

  const changeState = () => { setShow(!show); };

  useEffect(() => {
    if (show) {
      document.body.classList.add('nav-active');
    } else {
      document.body.classList.remove('nav-active');
    }
  }, [show]);

  return (
    <div className="header-holder">
      {show
      ? (
        <button className="nav-closer-outside" onClick={changeState} type="button">
          .
        </button>
      )
      : (
        <div className="nav-opener">
          <Button
            buttonStyle="menu--open"
            onClick={changeState}
          >
            <img src={OpenBurger} alt="Nav Open" />
          </Button>
        </div>
      ) }
      <div className={show ? 'nav-drop-active nav-drop' : 'nav-drop'}>
        <NavMenu
          changeState={changeState}
          language={language}
          handleSetLanguage={handleSetLanguage}
        />
      </div>
      {/* <a className="bookmark" href="https://tampereflutefest.com/festival-2022/">
        BOOKMARK
      </a> */}
      <ModalButton language={language} />
    </div>
  );

}

export default ShowHideNav;
