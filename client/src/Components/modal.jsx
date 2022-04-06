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

        <span className="modal-title">How to bookmark</span>
        <div className="modal-body">
          <p>Here is how to place a bookmark of our website on your home screen:</p>
          <p>For Iphone : </p>
          <ol>
            <li>open the website in the Safari app</li>
            <li>
              tap the share icon (an icon featuring a right-pointing
              arrow coming out of a box) and then select “Add to Home Screen”
            </li>
            <li>
              type the name you want for the bookmark and then click on “Add”.
              It will then appear on your home screen !
            </li>
          </ol>
          <p>For Androids :</p>
          <ol>
            <li>open our website with Chrome or Firefox</li>
            <li>
              tap the menu icon (3 dots in upper right-hand corner) and tap “Add to homescreen”.
            </li>
            <li>
              enter the name you want for the bookmark (or keep the default one) and click on
              “Add”.It will then appear on your home screen !
            </li>
          </ol>
          <p>Or</p>
          <ol>
            <li>open the website with Samsung internet</li>
            <li>tap the three-lines menu (generally at the bottom-right corner of the screen)</li>
            <li>
              tap on the choice “Add page to” and then on the “home screen” option.
              Then, click on “Add” and the website will appear on your home screen !
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Modal;
