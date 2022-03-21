import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/Styles/navMenu.css';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from './navButton';
import CloseBurger from '../Assets/Images/MenuCloseIcon.svg';

import Language from './language';

export const NavMenu = ({

  changeState,

}) => (
  <div className="navMenu">
    <Button
      buttonStyle="menu--close"
      onClick={changeState}
    >
      <img src={CloseBurger} alt="Nav Close" />
    </Button>
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" onClick={changeState}>
            Home
            <ChevronRightIcon />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/artists" onClick={changeState}>
            Artists
            <ChevronRightIcon />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/programme" onClick={changeState}>
            Programme
            <ChevronRightIcon />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/venue" onClick={changeState}>
            Venue
            <ChevronRightIcon />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/tickets_and_streaming" onClick={changeState}>
            Tickets and streaming
            <ChevronRightIcon />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contest" onClick={changeState}>
            Contest for artists
            <ChevronRightIcon />
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/contribute" onClick={changeState}>
            Contribute to the festival
            <ChevronRightIcon />
          </NavLink>
        </li>

        <li className="language-item">
          <Language />
        </li>
      </ul>
    </nav>
  </div>
);
