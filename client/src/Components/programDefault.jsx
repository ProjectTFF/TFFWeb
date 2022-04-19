import React from 'react';
import '../Assets/Styles/programDefault.css';
import { Link } from 'react-router-dom';
import { ProgramPictureMap } from '../Helpers/ProgramPictureMap';

function ProgramCollection(props) {
   const {
  programId, language,
} = props;

   return (
     <div className="program-info-col">
       <Link className="program-info-block" to={`/programme#${ProgramPictureMap[programId].programNameEN}`}>
         <div className="img-wrap">
           <img src={ProgramPictureMap[programId].programImage} alt="s" />
         </div>
         <span className="program-name">{language === 'english' ? ProgramPictureMap[programId].programNameEN : ProgramPictureMap[programId].programNameFI}</span>
       </Link>
     </div>
   );
}

export default ProgramCollection;
