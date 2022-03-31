import React from 'react';
import ProgramCard from '../Components/programCard';
import { ProgramCardObject } from '../Helpers/ProgramCardMap';
import '../Assets/Styles/programCard.css';
import '../Assets/Styles/programme.css';

function Programme() {
  return (
    <main>
      <div className="container">
        <div className="programme-section">
          <h1 className="page-title">Programme</h1>
          <div className="programme-wrap">
            {ProgramCardObject.map((cardObj) => (
              <ProgramCard
                key={cardObj.id}
                cardImage={cardObj.programImage}
                cardName={cardObj.programName}
                cardTitle={cardObj.programTitle}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Programme;
