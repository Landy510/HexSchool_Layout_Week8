import PropTypes from 'prop-types';
import { useEffect } from 'react';
const Modal = ({
  show,
  onClose,
  children
}) => {

  useEffect(() => {
     document.body.classList.toggle('overflow-y-hidden', show);

     return () => document.body.classList.remove('overflow-y-hidden');
  }, [show])

  if(!show) return null;

  return (
    <div className={`fixed top-[0] bottom-[0] left-[0] right-[0] flex items-center justify-center z-50`}>
      <div 
        className="fixed top-[0] bottom-[0] left-[0] right-[0] bg-slate-900/25 backdrop-blur transition-opacity opacity-100"
        onClick={() => onClose(false)}
      ></div>
      <div className='relative max-w-lg w-full p-3 bg-white mx-5 my-8'>
        <button 
          type='button'
          className='material-symbols-outlined absolute right-[-1.25rem] top-[-1.25rem] block w-[2.5rem] h-[2.5rem] bg-white rounded-full z-[1]'
          onClick={() => onClose(false)}
        >
          close
        </button>

        <div className="max-h-[600px] overflow-y-scroll p-5 transform transition-all opacity-100 scale-100">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
}