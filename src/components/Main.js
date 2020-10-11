// Dependencies
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Hooks
import useWindowSize from "../hooks/useWindowSize";

const Main = (props) => {

  // Hooks
  const windowSize = useWindowSize();

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

  // Set class to #root
  useEffect(()=> {
    document.body.style.height = `${ main.current.getBoundingClientRect().height}px`;
  },[windowSize.height])

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

    //Assign skew and smooth scrolling to the scroll container
    main.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
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
