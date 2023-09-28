import { useRef, useState } from "react";
import PropTypes from 'prop-types';


function getStyle(element) {
  if (typeof getComputedStyle !== 'undefined') {
    return getComputedStyle(element);
  }
  return element.currentStyle; // Old IE
}

const collapseAnimation = (isOpen, elRef) => {
  if (!elRef.current) return;

  if (!isOpen) {
    elRef.current.classList.remove('cusCollapse');
    const contentHeight = getStyle(elRef.current).height;

    elRef.current.classList.add('transitioning');

    const complete = () => {
      elRef.current.classList.remove('transitioning');
      elRef.current.classList.add('cusCollapse', 'show');
      elRef.current.removeEventListener('transitionend', complete);
    };

    elRef.current.addEventListener('transitionend', complete);

    setTimeout(() => {
      elRef.current.style.height = contentHeight;
    }, 0);
  } else {
    elRef.current.classList.remove('cusCollapse', 'show');
    elRef.current.classList.add('transitioning');

    const complete = () => {
      elRef.current.classList.remove('transitioning');
      elRef.current.classList.add('cusCollapse');
      elRef.current.style.removeProperty('height'); // If you dont remove the inline style 'height', it would make the next cycle to add height to .box(i.e. whose className has box) be borken.
      elRef.current.removeEventListener('transitionend', complete);
    };

    elRef.current.addEventListener('transitionend', complete);

    setTimeout(() => {
      elRef.current.style.height = 0;
    }, 0);
  }
};

const DisplayItem = ({content}) => {
  const contentRef = useRef(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleClick = () => {
    collapseAnimation(isCollapse, contentRef);
    setIsCollapse(prev => !prev)
  }

  return (
    <>
      <p className="font-medium relative pr-8">
        {content.headerTxt}
        <button 
          type="button"
          className="absolute right-[0px] top-1/2 -translate-y-1/2"
          onClick={handleClick}
        >
          <span className="material-symbols-outlined fs-40">
            {isCollapse ? 'remove': 'add'}
          </span>
        </button>
      </p>
      <div className="cusCollapse" ref={contentRef}>
        <p className="pt-3">
          {content.contentTxt}
        </p>
      </div>
    </>
  )
}

export default DisplayItem;

DisplayItem.propTypes = {
  content: PropTypes.shape({
    headerTxt: PropTypes.string,
    contentTxt: PropTypes.string,
  })
}