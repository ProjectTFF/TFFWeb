import React, { useState } from 'react';

const LanguageController = () => {
    const [language, setLanguage] = useState('english');

    const changeLanguage = () => {
        if (language === 'english') setLanguage('finnish');
        else setLanguage('english');
    };

    return (
      <button className="language-select" onClick={changeLanguage} type="button">
        {
            language === 'english'
            ? 'FI'
            : 'EN'
        }
      </button>
    );
};

export default LanguageController;
