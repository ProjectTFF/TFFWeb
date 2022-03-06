import React from 'react';
import '../Assets/Styles/navButton.css';

const STYLES = [
    'btn--right',
    'btn--left',
];

export const Button = ({

    children,
    onClick,
    buttonStyle,

}) => {

    const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    return (
      <button
        className={`btn ${checkStyle}`}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    );
};
