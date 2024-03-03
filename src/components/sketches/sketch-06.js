"use client";
import React, { useEffect } from "react";
import canvasSketch from "canvas-sketch";
import { math, random } from "canvas-sketch-util";

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height, client }) => {
    // Definindo o fundo como branco
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.5;

    let x, y;

    const num = 80;
    const radius = width * 0.3;

    const drawRectangles = () => {
      for (let i = 0; i < num; i++) {
        const slice = math.degToRad(360 / num);
        const angle = slice * i;

        x = cx + radius * Math.sin(angle);
        y = cy + radius * Math.cos(angle);

        context.save();
        context.fillStyle = "#D6D3F0";
        context.translate(x, y);
        context.rotate(-angle);
        context.scale(random.range(0.1, 2), random.range(0.2, 0.5));

        context.beginPath();
        context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
        context.fill();

        context.restore();
      }
    };

    const drawCircles = () => {
      for (let i = 0; i < num; i++) {
        const slice = math.degToRad(360 / num);
        const angle = slice * i;

        context.save();
        context.translate(cx, cy);
        context.rotate(-angle);

        context.lineWidth = random.range(0, 20);
        context.strokeStyle = "#0F5257";

        context.beginPath();
        context.arc(
          0,
          0,
          radius * random.range(0.7, 1.5),
          slice * random.range(1, -8),
          slice * random.range(1, 5)
        );
        context.stroke();
        context.restore();
      }
    };

    drawRectangles();
    drawCircles();
  };
};

const Sketch6 = () => {
  const ref = React.createRef();
  useEffect(() => {
    canvasSketch(sketch, {
      ...settings,
      canvas: ref.current,
    });
  }, [ref]);
  return <canvas ref={ref} className="shadow-2xl" />;
};

export default Sketch6;
