import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/Styles/navMenu.css';

import { Button } from './navButton';
import CloseBurger from '../Assets/Images/MenuCloseIcon.svg';
import Arrow from '../Assets/Images/Arrow.svg';

export const NavMenu = ({

  changeState,

}) => (
  <div className="navMenu">
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <div>
          <ul className="navbar-nav ml-auto">
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={changeState}>
                Home
                <img className="arrow" src={Arrow} alt=">" />
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link" to="/artists" onClick={changeState}>
                Artists
                <img className="arrow" src={Arrow} alt=">" />
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link" to="/programme" onClick={changeState}>
                Programme
                <img className="arrow" src={Arrow} alt=">" />
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link" to="/venue" onClick={changeState}>
                Venue
                <img className="arrow" src={Arrow} alt=">" />
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link" to="/tickets_and_streaming" onClick={changeState}>
                Tickets and streaming
                <img className="arrow" src={Arrow} alt=">" />
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link" to="/contest" onClick={changeState}>
                Contest for artists
                <img className="arrow" src={Arrow} alt=">" />
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link" to="/contribute" onClick={changeState}>
                Contribute to the festival
                <img className="arrow" src={Arrow} alt=">" />
              </NavLink>
            </li>
            <hr />
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
