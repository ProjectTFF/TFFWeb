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
      title: 'Kirjanmerkkiohjeet',
      p1: 'Näin lisäät sivun aloitusnäytöllesi:',
      p2: 'Iphone :',
      p2l1: 'avaa sivu Safari-selaimessa',
      p2l2: 'paina jaa-kuvaketta (oikealle osoittava laatikosta tuleva nuoli) ja valitse "Lisää kotinäkymään"',
      p2l3: 'syötä nimi kirjanmerkille ja paina lisää-näppäintä. nyt pääset sivulle suoraan kotinäkymästä',
      p3: 'Android :',
      p3l1: 'avaa sivu Chromessa tai Firefoxissa',
      p3l2: 'avaa selaimen valikko (kolme pistettä ruudun oikeassa yläkulmassa ja valitse "Lisää aloitusnäyttöön"',
      p3l3: 'syötä nimi kirjanmerkille ja paina "Lisää". Nyt pääset sivulle suoraan kotinäkymästä',
      or: 'Tai',
      p3l4: 'avaa sivu Samsung internet -sovelluksessa',
      p3l5: 'paina valikko-kuvaketta (sijaitsee yleensä näytön oikeassa alakulmassa)',
      p3l6: 'lisää sivu aloitusnäytölle',
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
          <p>{content.p2}</p>
          <ol>
            <li>{content.p2l1}</li>
            <li>{content.p2l2}</li>
            <li>{content.p2l3}</li>
          </ol>
          <p>{content.p3}</p>
          <ol>
            <li>{content.p3l1}</li>
            <li>{content.p3l2}</li>
            <li>{content.p3l3}</li>
          </ol>
          <p>{content.or}</p>
          <ol>
            <li>{content.p3l4}</li>
            <li>{content.p3l5}</li>
            <li>{content.p3l6}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Modal;
