// Dependencies
import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styles
import "./assets/scss/main.scss";
// Components
import Scrollbar from "./components/Scrollbar";
import Cursor from "./components/Cursor";
import Main from "./components/Main";


const App = () => {

  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }else {
      animation.start("hidden")
    }
  }, [animation, inView])

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
        <motion.section
          className="o-container"
          ref={contentRef}
          animate={animation}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
            },
            hidden: { opacity: 0, y: 72 },
          }}
        >
          <h1>Hello World</h1>
        </motion.section>
      </Main>
    </>
  );
}

export default App;
