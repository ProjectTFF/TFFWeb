import React, { useEffect, useState } from 'react';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

function ScrollToTop() {
   const [backToTop, setBackToTop] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 300) {
            setBackToTop(true);
         } else {
            setBackToTop(false);
         }
      });
   }, []);

   const scrollUp = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

  return (
    <div className="scroll-to-top">
      {backToTop && (
      <button type="button" onClick={scrollUp}>
        <ExpandCircleDownIcon />
      </button>
      )}
    </div>
  );
}

export default ScrollToTop;
