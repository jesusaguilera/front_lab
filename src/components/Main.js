// Dependencies
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Hooks
import useWindowSize from "../hooks/useWindowSize";
import useViewportDetect from "../hooks/useViewportDetect";
import useBrowserDetect from "../hooks/useBrowserDetect";

const Main = (props) => {

  // Hooks
  const windowSize = useWindowSize();
  const viewportDetect = useViewportDetect();
  const browserDetect = useBrowserDetect();

  // useRef
  const main = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  // Set class to #root
  useEffect(()=> {
    let root = document.getElementById("root");
    root.classList.add("o-wrapper__root");
  },[])

  // Set body height once page is resized.
  useEffect(()=> {
    document.body.style.height = `${ main.current.getBoundingClientRect().height}px`;
  },[windowSize.height])

  useEffect(()=> {
    document.body.style.height = `${ main.current.getBoundingClientRect().height}px`;
  },[])

  useEffect(() => {
    if (viewportDetect) {
      document.body.className = "";
      viewportDetect.isDesktop && document.body.classList.add("is-desktop");
      viewportDetect.isTablet && document.body.classList.add("is-tablet");
      viewportDetect.isMobile && document.body.classList.add("is-mobile");
      browserDetect.isChrome && document.body.classList.add("is-chrome");
      browserDetect.isFirefox && document.body.classList.add("is-firefox");
      browserDetect.isEdge && document.body.classList.add("is-edge");
      browserDetect.isSafari && document.body.classList.add("is-safari");
    }
  }, [viewportDetect, browserDetect]);


  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.floor(Math.round(data.previous * 100) / 100);

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / windowSize.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    // Assign skew and smooth scrolling to element with the scroll.
    main.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    // Loop through requestAnimationFrame.
    requestAnimationFrame(() => skewScrolling());

  };

  return (
      <main ref={main} className="o-wrapper">
        {props.children}
      </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main;
