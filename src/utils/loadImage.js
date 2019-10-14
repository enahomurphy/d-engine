export default (image, callback) => {
  const img = new Image();
  img.onload = function () {
    callback(img);
  };

  img.src = image;
};
