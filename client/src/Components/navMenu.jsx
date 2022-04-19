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
      programme: 'Program',
      venue: 'Venue',
      tickets: 'Tickets & Streaming',
      languageText: 'VAIHDA KIELI',
      language: 'FI',
      innovate: 'Innovate',
    },
    finnish: {
      home: 'Etusivu',
      artists: 'Artistit',
      finalists: 'YAC -finalistit',
      programme: 'Ohjelma',
      venue: 'Tapahtumapaikat',
      tickets: 'Liput ja suoratoisto',
      languageText: 'CHANGE TO',
      language: 'EN',
      innovate: 'Innovoi',
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
          <li className="nav-item">
            <a className="nav-link" href="https://tffgo.tampereflutefest.com/soundbow.html" target="_blank" onClick={changeState} rel="noreferrer">
              {content.innovate}
              <ChevronRightIcon />
            </a>
          </li>
        </ul>
      </nav>
      <div className="language-wrap">
        <button
          className="language-select"
          onClick={() => handleSetLanguage(language === 'english' ? 'finnish' : 'english')}
          type="button"
        >
          <span className="language-text">{content.languageText}</span>
          {content.language}
        </button>
      </div>
    </div>
  );
}
