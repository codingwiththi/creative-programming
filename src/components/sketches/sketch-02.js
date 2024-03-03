"use client";
import React, { useEffect } from "react";
import canvasSketch from "canvas-sketch";

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
    const w = width * 0.3;
    const h = height * 0.3;

    context.save();

    context.translate(x, y);
    context.rotate(0.75);

    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5, w, h);
    context.fill();
    context.restore();
  };
};

const Sketch2 = () => {
  const ref = React.createRef();
  useEffect(() => {
    canvasSketch(sketch, {
      ...settings,
      canvas: ref.current,
    });
  }, [ref]);
  return <canvas ref={ref} className="shadow-2xl" />;
};

export default Sketch2;
