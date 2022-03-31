import React, { useEffect } from 'react';
import '../Assets/Styles/modal.css';
import CancelIcon from '@mui/icons-material/Cancel';

function Modal(props) {
  const { setShowModal, showModal } = props;
  // const modalRef = useRef();

  // useEffect(() => {
  //   const clickOutsideContent = (e) => {
  //     if (e.target === modalRef.current) {
  //         setShowModal(false);
  //     }
  //   };
  //   window.addEventListener('click', clickOutsideContent);
  //   return () => {
  //     window.removeEventListener('click', clickOutsideContent);
  //   };

  // }, [showModal]);

  useEffect(() => {

    if (showModal) {
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }
  }, [showModal]);

  return (
    <div className={showModal ? 'modal-wrapper active' : 'modal-wrapper'}>
      <div className="modal-container">
        <button type="button" onClick={() => setShowModal(false)}>
          <CancelIcon />
        </button>

        <span className="modal-title">Bookmark Information</span>
        <div className="modal-body">
          <p>Here the information for how to use bookmark option in mobile will added.</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
