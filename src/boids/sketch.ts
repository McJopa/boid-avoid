import * as p5 from "p5";

export const boidSketch = (s: p5) => {
  let x = 100;
  let y = 100;

  s.setup = () => {
    s.createCanvas(200, 200);
  };

  s.draw = () => {
    s.background(0);
    s.fill(255);
    s.rect(x, y, 50, 50);
  };
};
