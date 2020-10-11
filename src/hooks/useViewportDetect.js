import { useState, useEffect } from "react";

import useWindowSize from "./useWindowSize";

const useViewportDetect = () => {

  const windowSize = useWindowSize();

  const [viewport, setViewport] = useState(null);

  useEffect(() => {
    checkViewport();
  }, [windowSize.width]);

  const checkViewport = () => {
    if (windowSize.width > 768) {
      setViewport({isDesktop: true});
    } else if (windowSize.width < 769 && windowSize.width > 480) {
      setViewport({isTablet: true});
    } else {
      setViewport({isMobile: true});
    }
  };

  return viewport;
}

export default useViewportDetect;
