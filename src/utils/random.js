export default  (minNumber, maxNumber) => {
  return parseInt(
    Math.random() * (maxNumber - minNumber) + minNumber
  );
};