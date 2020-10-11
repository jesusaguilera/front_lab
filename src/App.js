// Dependencies
import React, { useState, useEffect, useRef } from 'react';

// Styles
import "./assets/scss/main.scss";

// Components
import Scrollbar from "./components/Scrollbar";
import Cursor from "./components/Cursor";
import Main from "./components/Main";

const App = () => {

  return (
    <>
      <Cursor />
      <Scrollbar />
      <Main>
        <section className="o-container">
          <h1 data-cursor-hover="Go to Hello World">Hello World</h1>
        </section>
        <section className="o-container">
          <h1>Hello World</h1>
        </section>
        <section className="o-container">
          <h1>Hello World</h1>
        </section>
      </Main>
    </>
  );
}

export default App;
