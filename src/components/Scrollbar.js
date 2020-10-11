// Dependencies
import React, { useState, useEffect, useRef } from "react";

// Hooks
import useWindowSize from "../hooks/useWindowSize";

const Scrollbar = () => {

  const windowSize = useWindowSize();

  // Scrollbar ref
  const scrollbar = useRef();

  // Run first animation
  useEffect(() => {
    requestAnimationFrame(() => scrolling());
  }, []);

  useEffect(()=> {
    requestAnimationFrame(() => scrolling());
  },[windowSize.height])

  // Scrolling
  const scrolling = () => {

    //Calculate totalHeight
    let totalHeight = document.body.scrollHeight - windowSize.height;

    //Set smooth
    let smooth = (window.scrollY / totalHeight ) * 100;

    //Assign smooth scrolling to the scrollbar
    scrollbar.current.style.transform = `translate3d(0, -${100 -+ smooth}%, 0)`;

    //loop
    requestAnimationFrame(() => scrolling());
  };

  return (
    <div className="c-scrollbar__wrapper">
      <div className="c-scrollbar" ref={scrollbar}></div>
    </div>
  );
};

export default Scrollbar;
