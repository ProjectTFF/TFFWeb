import React, { useEffect } from 'react';
import '../Assets/Styles/modal.css';
import CancelIcon from '@mui/icons-material/Cancel';

function Modal(props) {
  const {
    setShowModal, showModal, language,
  } = props;
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

  // Content of the page by language
  let content = {
    english: {
      title: 'How to bookmark',
      p1: 'Here is how to place a bookmark of our website on your home screen:',
      p2: 'For Iphone :',
      p2l1: 'open the website in the Safari app',
      p2l2: 'tap the share icon (an icon featuring a right-pointing arrow coming out of a box) and then select “Add to Home Screen”',
      p2l3: 'type the name you want for the bookmark and then click on “Add”. It will then appear on your home screen !',
      p3: 'For Androids :',
      p3l1: 'open our website with Chrome or Firefox',
      p3l2: 'tap the menu icon (3 dots in upper right-hand corner) and tap “Add to homescreen”.',
      p3l3: 'enter the name you want for the bookmark (or keep the default one) and click on “Add”. It will then appear on your home screen !',
      or: 'Or',
      p3l4: 'open the website with Samsung internet',
      p3l5: 'tap the three-lines menu (generally at the bottom-right corner of the screen)',
      p3l6: 'tap on the choice “Add page to” and then on the “home screen” option. Then, click on “Add” and the website will appear on your home screen !',
    },
    finnish: {
      title: 'How to bookmark',
      p1: 'Here is how to place a bookmark of our website on your home screen:',
      p2: 'For Iphone :',
      p2l1: 'open the website in the Safari app',
      p2l2: 'tap the share icon (an icon featuring a right-pointing arrow coming out of a box) and then select “Add to Home Screen”',
      p2l3: 'type the name you want for the bookmark and then click on “Add”. It will then appear on your home screen !',
      p3: 'For Androids :',
      p3l1: 'open our website with Chrome or Firefox',
      p3l2: 'tap the menu icon (3 dots in upper right-hand corner) and tap “Add to homescreen”.',
      p3l3: 'enter the name you want for the bookmark (or keep the default one) and click on “Add”. It will then appear on your home screen !',
      or: 'Or',
      p3l4: 'open the website with Samsung internet',
      p3l5: 'tap the three-lines menu (generally at the bottom-right corner of the screen)',
      p3l6: 'tap on the choice “Add page to” and then on the “home screen” option. Then, click on “Add” and the website will appear on your home screen ! (Finnish)',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);
  return (
    <div className={showModal ? 'modal-wrapper active' : 'modal-wrapper'}>
      <div className="modal-container">
        <button type="button" onClick={() => setShowModal(false)}>
          <CancelIcon />
        </button>

        <span className="modal-title">{content.title}</span>
        <div className="modal-body">
          <p>{content.p1}</p>
          <br />
          <p>
            {content.p2}
            <ol>
              <li>{content.p2l1}</li>
              <li>{content.p2l2}</li>
              <li>{content.p2l3}</li>
            </ol>
          </p>
          <p>
            {content.p3}
            <ol>
              <li>{content.p3l1}</li>
              <li>{content.p3l2}</li>
              <li>{content.p3l3}</li>
            </ol>
            {content.or}
            <ol>
              <li>{content.p3l4}</li>
              <li>{content.p3l5}</li>
              <li>{content.p3l6}</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
