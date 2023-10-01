import { useId, useState, forwardRef } from "react";

const Checkbox = forwardRef(function Checkbox({children}, ref) {
  const id = useId();
  const [checked, setChecked] = useState(false);

  return (
    <>
      <label 
        htmlFor={id}
        className="flex items-center"
      >
        <span 
          className="w-[18px] h-[18px] border-white border-[1px] border-solid block rounded-[2px] hover:cursor-pointer flex items-center justify-center"
          onClick={() => setChecked(prev => !prev)}
        >
          <span 
            className={[
              "material-symbols-outlined text-white",
              !checked ? 'opacity-0' : 'opacity-100' // in order to fix the problem that first clicking will show the text instead of the icon in Chrome
            ].join(' ')}
          >
            done
          </span>
        </span>
        {children}
      </label>
      <input 
        className="hidden" 
        type="checkbox" 
        id={id} 
        checked={checked}
        ref={ref}
        readOnly
      />
    </>
  )
})

export default Checkbox;