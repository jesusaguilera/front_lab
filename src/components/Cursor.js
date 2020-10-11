// Dependencies
import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

// Hooks
import useBrowserDetect from "../hooks/useBrowserDetect";

const Cursor = () => {

  const browserDetect = useBrowserDetect();

  console.log(browserDetect);

  // useRef
  const cursor = useRef();
  const cursorText = useRef();

  // useState
  const [isChrome, setIsChrome] = useState(!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime));

  // useEffect
  useEffect(()=> {
    console.log("isChrome", isChrome);
  }, [])

  // Move cursor
  useEffect(()=> {
    window.addEventListener('mousemove', e => {
      moveCursor(e);
      pointerOnClickedElements();
    });
  }, []);

  // Set pointer effect
  const pointerOnClickedElements = () => {
    let hovered = document.querySelectorAll('*[data-cursor-hover]');
    let links = document.querySelectorAll('a');
    let buttons = document.querySelectorAll('button');

    hovered.forEach( dataHovered => {
      dataHovered.addEventListener("mouseover", () => {
        let dataCursorHoverText = dataHovered.getAttribute("data-cursor-hover");
        cursor.current.classList.add('is-active');
        cursorText.current.textContent = dataCursorHoverText;
      })
      dataHovered.addEventListener("mouseleave", () => {
        cursor.current.classList.remove('is-active');
        cursorText.current.textContent = "";
      })
    })
    links.forEach( link => {
      link.addEventListener("mouseover", () => {
        let dataCursorHoverText = link.getAttribute("data-cursor-hover");
        cursor.current.classList.add('is-active');
        cursorText.current.textContent = dataCursorHoverText;
      })
      link.addEventListener("mouseleave", () => {
        cursor.current.classList.remove('is-active');
        cursorText.current.textContent = "";
      })
    })
    buttons.forEach( button => {
      button.addEventListener("mouseover", () => {
        let dataCursorHoverText = button.getAttribute("data-cursor-hover");
        cursor.current.classList.add('is-active');
        cursorText.current.textContent = dataCursorHoverText;
      })
      button.addEventListener("mouseleave", () => {
        cursor.current.classList.remove('is-active');
        cursorText.current.textContent = "";
      })
    })
  }

  const moveCursor = (e) => {
    cursor.current.setAttribute("style", `top: ${e.clientY - 8}px; left: ${e.clientX - 8}px`)
  };

  const cursorClasses = classNames("c-cursor", isChrome && "is-blurred")

  return (
    <>
      <div className={cursorClasses} ref={cursor}>
        <p className="c-cursor__text" ref={cursorText}></p>
      </div>
    </>
  );
};

export default Cursor;
