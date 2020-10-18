// Dependencies
import React, { useEffect } from 'react';

// Styles
import "./assets/scss/main.scss";

// Components
import Scrollbar from "./components/Scrollbar";
import CustomCursor from "./components/CustomCursor";

// Containers
import Home from "./containers/Home";

const App = () => {

  return (
    <>
      <CustomCursor />
      <Home />
      <Scrollbar />
    </>
  );
}

export default App;
