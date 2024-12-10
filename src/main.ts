import p5 from 'p5';
import { Delaunay, range } from 'd3';
import './style.css';
// import './custom.css';

const STROKE_WEIGHT = 5;

const sketch = (p: p5) => {
  // let aOff = 0;

  p.setup = () => {
    const canvasElement = document.getElementById('main-canvas');

    if (!canvasElement) {
      throw new Error('missing canvas');
    }

    const canvasWidth = canvasElement.clientWidth;
    const canvasHeight = canvasElement.clientHeight;

    p.createCanvas(canvasWidth, canvasHeight, canvasElement);

    p.background('white');
    p.angleMode(p.DEGREES);

    p.stroke('black');
    p.strokeWeight(STROKE_WEIGHT);

    p.rect(0, 0, canvasWidth, canvasHeight);
  };
};

new p5(sketch);
