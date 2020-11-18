import React from "react";
import { css } from "frontity";
import { Parallax } from "react-parallax";

const Hero = () => {
  return (
    <Parallax
      blur={0}
      bgImage="https://peepeats.website/wp-content/uploads/2020/11/peep-eats-hero-1800.png"
      strength={300}
      css={css`
        height: 18em;
        z-index: 0;
      `}
    >
      <div className="hero"></div>
    </Parallax>
  );
};

export default Hero;
