import {useState, useEffect} from "react";

const useWindowSize = () => {

  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  // useState
  const [windowSize, setWindowSize] = useState(getSize);

  // Set new size to windowSize state
  const handleResize = () => {
    setWindowSize(getSize);
  }

  // useEffect
  useEffect(()=> {
    handleResize();

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize;
}

export default useWindowSize;
