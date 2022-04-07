/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Modal from './modal';

function ModalButton() {
   const [showModal, setShowModal] = useState(false);
   const changeState = () => {
       setShowModal(!showModal);
       };

  return (
    <>
      <button
        type="button"
        className="openModalBtn"
        onClick={() => { setShowModal(true); }}
      >
        Bookmark
      </button>
      {showModal && <button type="button" className="modal-closer-outside" onClick={changeState}>.</button>}

      <Modal setShowModal={setShowModal} showModal={showModal} />
    </>
  );
}

export default ModalButton;
