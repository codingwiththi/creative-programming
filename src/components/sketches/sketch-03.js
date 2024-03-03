"use client";
import React, { useEffect } from "react";
import canvasSketch from "canvas-sketch";
import { math } from "canvas-sketch-util";

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    // Definindo o fundo como branco
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.03;
    const h = height * 0.1;

    const num = 8;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;
      context.save();

      context.translate(x, y);
      context.rotate(angle);

      context.beginPath();
      context.rect(-w * 0.5, -h * 0.7, w, h);
      context.fill();
      context.restore();
    }
  };
};

const Sketch3 = () => {
  const ref = React.createRef();
  useEffect(() => {
    canvasSketch(sketch, {
      ...settings,
      canvas: ref.current,
    });
  }, [ref]);
  return <canvas ref={ref} className="shadow-2xl" />;
};

export default Sketch3;
