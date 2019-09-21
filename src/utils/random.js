export default  (minNumber, maxNumber) => {
  return Math.floor(
    minNumber + Math.random() * (maxNumber + 1 - minNumber)
  );
};