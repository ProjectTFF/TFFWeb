/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Modal from './modal';
// import Modal from './modal';

function ModalButton(props) {
  const {
    language,
   } = props;

   const [showModal, setShowModal] = useState(false);
   const changeState = () => {
       setShowModal(!showModal);
       };

   // Content of the page by language
   let content = {
     english: {
       bookmark: 'Bookmark',
     },
     finnish: {
      bookmark: 'Bookmark (Finnish)',
     },
   };

   content = language === 'finnish' ? (content.finnish) : (content.english);
  return (
    <>
      <button
        type="button"
        className="openModalBtn"
        onClick={() => { setShowModal(true); }}
      >
        {content.bookmark}
      </button>
      {showModal && <button type="button" className="modal-closer-outside" onClick={changeState}>.</button>}

      <Modal setShowModal={setShowModal} showModal={showModal} language={language} />
    </>
  );
}

export default ModalButton;
