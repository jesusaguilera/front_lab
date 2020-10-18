// Dependencies
import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";

// Components
import Main from "../components/Main";

const Home = () => {

  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  const anim = {
    hidden: {
      opacity: 0,
      transform: "translateY(72px)"
    },
    visible: {
      opacity: 1,
      transform: "translateY(0)",
      config : config.default    
    }
  }

  const [springProps, set, stop] = useSpring( () => (anim.hidden));

  useEffect(() => {
    if (inView) {
      set(anim.visible);
    }else {
      set(anim.hidden);
    }
  }, [inView])

  return (
    <Main>
      <section className="o-container">
        <h1 data-cursor-hover="Go to Hello World">Hello World</h1>
      </section>
      <section className="o-container">
        <h1>Section 2</h1>
      </section>
      <animated.section
        className="o-container"
        ref={contentRef}
        style={springProps}
      >
        <h1>Section 3</h1>
      </animated.section>
    </Main>
  )
}

export default Home;
