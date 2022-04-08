import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/Styles/navMenu.css';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from './navButton';
import CloseBurger from '../Assets/Images/MenuCloseIcon.svg';

export function NavMenu(props) {
  const {
    changeState, language, handleSetLanguage,
   } = props;

  // Content of the page by language
  let content = {
    english: {
      home: 'Home',
      artists: 'Artists',
      finalists: 'YAC Finalists',
      programme: 'Programme',
      venue: 'Venue',
      tickets: 'Tickets and streaming',
      language: 'FI',
    },
    finnish: {
      home: 'Home (Finnish)',
      artists: 'Artists (Finnish)',
      finalists: 'YAC Finalists (Finnish)',
      programme: 'Programme (Finnish)',
      venue: 'Venue (Finnish)',
      tickets: 'Tickets and streaming (Finnish)',
      language: 'EN',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);
  return (
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
              {content.home}
              <ChevronRightIcon />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/artists" onClick={changeState}>
              {content.artists}
              <ChevronRightIcon />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/artistCompetitionFinalist" onClick={changeState}>
              {content.finalists}
              <ChevronRightIcon />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/programme" onClick={changeState}>
              {content.programme}
              <ChevronRightIcon />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/venue" onClick={changeState}>
              {content.venue}
              <ChevronRightIcon />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tickets_and_streaming" onClick={changeState}>
              {content.tickets}
              <ChevronRightIcon />
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/contest" onClick={changeState}>
              Contest for artists
              <ChevronRightIcon />
            </NavLink>
          </li> */}

          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/contribute" onClick={changeState}>
              Contribute to the festival
              <ChevronRightIcon />
            </NavLink>
          </li> */}

          <li className="language-item">
            <button className="language-select" onClick={() => handleSetLanguage(language === 'english' ? 'finnish' : 'english')} type="button">
              {content.language}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
