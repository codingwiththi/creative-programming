export const degToRad = (degrees) => {
  return (degrees / 180) * Math.PI;
};

export const randomRange = (min, max) => {
  return min + Math.random() * (max - min);
};
