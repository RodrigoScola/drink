import React from "react";
import Sketch from "react-p5";

export const BackgroundComponent = () => {
  let x = 40;
  let y = 50;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.outerWidth, window.innerHeight).parent(
      canvasParentRef
    );
  };
  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(x, y, x, y);
    x++;
  };

  return <Sketch setup={setup} draw={draw} />;
};
