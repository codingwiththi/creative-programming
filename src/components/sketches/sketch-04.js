"use client";
import React, { useEffect } from "react";
import canvasSketch from "canvas-sketch";
import { math, random } from "canvas-sketch-util";

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    // Definindo o fundo como branco
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    let x, y;

    const num = 12;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();

      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(1, 3), 1);

      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();

      context.restore();
    }
  };
};

const Sketch4 = () => {
  const ref = React.createRef();
  useEffect(() => {
    canvasSketch(sketch, {
      ...settings,
      canvas: ref.current,
    });
  }, [ref]);
  return <canvas ref={ref} className="shadow-2xl" />;
};

export default Sketch4;
