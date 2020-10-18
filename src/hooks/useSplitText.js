import React, { useState, useEffect } from "react";
import { useTrail, animated } from 'react-spring'

const useSplitText = (text, splitClass, mode) => {

  const [splitText, setSplitText] = useState([]);
  const [toggle, setToggle] = useState(false)

  const config = { mass: 5, tension: 2000, friction: 200 }

  const trail = useTrail(splitText.length, {
    config,
    // opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { x: 20, height: 0 },
  })

  useEffect(() => {
    splitter(text, mode);
    setTimeout(()=> {
      setToggle(true);
    }, 4000)
  }, []);

  const splitter = (text, mode) => {
    let spt = text.split(mode === "letter" ? "" : " ");
    setSplitText(spt);
  };

  return function () {
    return trail.map(({x, height, ...rest}, index) => {
      return (
        <animated.span
          style={{
            ...rest,
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
          }}
          key={`split-${index}`}
          className={splitClass}
        >
          {splitText[index]}
        </animated.span>
      );
    });
  };

};

export default useSplitText;
