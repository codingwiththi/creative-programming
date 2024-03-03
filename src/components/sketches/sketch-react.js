"use client";
import React, { useEffect } from "react";
import canvasSketch from "canvas-sketch";

const settings = {
  dimensions: "a4",
  pixelsPerInch: 300,
  units: "in",
};

const sketch = ({}) => {
  // Basic example from canvas-sketch repo
  return ({ context, width, height }) => {
    // Margin in inches
    const margin = 1 / 4;

    // Off-white background
    context.fillStyle = "hsl(0, 0%, 98%)";
    context.fillRect(0, 0, width, height);

    // Gradient foreground
    const fill = context.createLinearGradient(0, 0, width, height);
    fill.addColorStop(0, "cyan"); // Using Tailwind CSS background color
    fill.addColorStop(1, "orange"); // Using Tailwind CSS background color

    // Fill rectangle
    context.fillStyle = fill;
    context.fillRect(margin, margin, width - margin * 2, height - margin * 2);
  };
};

const SketchReact = () => {
  const ref = React.createRef();
  useEffect(() => {
    canvasSketch(sketch, {
      ...settings,
      canvas: ref.current,
    });
  }, [ref]);
  return <canvas className="w-full h-full" ref={ref} />;
};

export default SketchReact;
