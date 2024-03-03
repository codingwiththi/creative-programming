"use client";
import React, { useEffect } from "react";
import canvasSketch from "canvas-sketch";

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    // Definindo o fundo como branco
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.02;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        // Definindo os quadrados com preenchimento preto
        context.fillStyle = "black";
        context.fillRect(x, y, w, h);

        // Desenhando os contornos
        context.strokeStyle = "white";
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          // Definindo os quadrados internos com preenchimento branco
          context.fillStyle = "white";
          context.fillRect(x + off / 2, y + off / 2, w - off, h - off);

          // Desenhando os contornos dos quadrados internos
          context.strokeStyle = "black";
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }
      }
    }
  };
};

const Sketch = () => {
  const ref = React.createRef();
  useEffect(() => {
    canvasSketch(sketch, {
      ...settings,
      canvas: ref.current,
    });
  }, [ref]);
  return <canvas ref={ref} className="shadow-2xl" />;
};

export default Sketch;
