import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(false)
  const [prevLoc, setPrevLoc] = useState("")
  const location = useLocation()

  useEffect(() => {
     setPrevLoc(location.pathname)
     setProgress(true)
     if(location.pathname===prevLoc){
        setPrevLoc('')
     }
  }, [location])

  useEffect(() => {
     setProgress(false)
  }, [prevLoc])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {progress && <TopBarProgress />}
      {children || null}
    </>
    );
};

export default ScrollToTop;