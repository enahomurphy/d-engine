const random = (minNumber, maxNumber) => {
  if (!maxNumber) {
    return random(0, minNumber);
  }

  if (minNumber % 1 === 0 || maxNumber % 1 === 0) {
    return Math.floor(
      minNumber + Math.random() * (maxNumber + 1 - minNumber)
    );
  }

  return (minNumber + Math.random() * (maxNumber + 1 - minNumber)).toFixed(1);
};

export default random;