const random = (minNumber, maxNumber) => {
  if (!maxNumber) {
    return random(0, minNumber);
  }

  return (minNumber + Math.random() * (maxNumber + 1 - minNumber)).toFixed(1)
};

export default  random;