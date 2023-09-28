import { useRef, useState } from "react";

function getStyle(element) {
  if (typeof getComputedStyle !== 'undefined') {
    return getComputedStyle(element);
  }
  return element.currentStyle; // Old IE
}

const getDimension = (isOpen, elRef) => {
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

const DisplayItem = () => {
  const contentRef = useRef(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleClick = () => {
    getDimension(isCollapse, contentRef);
    setIsCollapse(prev => !prev)
  }

  return (
    <>
      <p className="font-medium relative">
        ALPHABOX+ 的使用方式是什麼？
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
        首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。
      </div>
    </>
  )
}

export default DisplayItem;