// init p5 instance and mount to dom

import p5 from "p5";
import { boidSketch } from "./sketch";

export const createSketch = (parentId: string) => {
  const parent = document.getElementById(parentId);
  if (!parent) throw new Error("Cannot find canvas parent EL");
  let myp5 = new p5(boidSketch, parent);
};
