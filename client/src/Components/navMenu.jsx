import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/Styles/navMenu.css';

import { Button } from './navButton';
import CloseBurger from '../Assets/Images/MenuCloseIcon.svg';

export const NavMenu = ({

  changeState,

}) => (
  <div className="navMenu">
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/" onClick={changeState}>
          TFF Go !
        </NavLink>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={changeState}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/artists" onClick={changeState}>
                Artists
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/programme" onClick={changeState}>
                Programme
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/venue" onClick={changeState}>
                Venue
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tickets_and_streaming" onClick={changeState}>
                Tickets and streaming
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contest" onClick={changeState}>
                Contest for artists
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contribute" onClick={changeState}>
                Contribute to the festival
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Button
      buttonStyle="btn--right"
      onClick={changeState}
    >
      <img src={CloseBurger} alt="Nav Close" />
    </Button>
  </div>
);
