import React from 'react';
import '../Assets/Styles/navButton.css';

const STYLES = [
    'menu--close',
    'menu--open',
];

export const Button = ({

    children,
    onClick,
    buttonStyle,

}) => {

    const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    return (
      <button
        className={`menu-btn ${checkStyle}`}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    );
};
