import { useEffect } from "react";
import { useLocation } from "react-router-dom";



/**
 * Once the url changes, viewport will scroll to the top edge of the page
 *
 * @return {*} 
 */
const ScrollToTop = () => {
  const {pathname} = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  return (
    <></>
  )
}

export default ScrollToTop;