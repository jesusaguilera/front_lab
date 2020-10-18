// Dependencies
import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { useSpring, a, config } from "react-spring";
import { useDrag } from "react-use-gesture";

import useSplitText from "../hooks/useSplitText";

// Components
import Main from "../components/Main";

const Home = () => {

  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit faucibus diam laoreet dignissim. Mauris et mi in enim eleifend vehicula. Morbi ut felis mollis, cursus lacus eget, tempor quam. Sed dictum arcu vel sapien tristique, sollicitudin lobortis urna molestie. Sed convallis luctus dapibus. Duis ultrices sapien felis, vel placerat nulla tincidunt nec. Praesent urna est, varius in viverra sed, facilisis quis augue. Sed ut auctor mauris."

  const splitText = useSplitText(loremIpsum, "c-text-split__span");

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
        <p className="c-text-split">
        {splitText()}
        </p>
      </section>
      <a.section
        className="o-container"
        ref={contentRef}
        style={springProps}
      >
        <h1>Hello World</h1>
      </a.section>
    </Main>
  )
}

export default Home;
