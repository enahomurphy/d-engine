// read more on canvas drawImage here 
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
function Sprite(canvas, image, position,  width, height) {
  this.context = canvas.context;
  this.img = image;
  this.width = width;
  this.height = height;
  this.position = position;
  return this;
}

Sprite.prototype.draw = function(vector, width, height) {
  this.context.drawImage(
    this.img,
    this.position.x,
    this.position.y,
    this.width,
    this.height,
    vector.x,
    vector.y,
    width || this.width,
    height || this.height
  );
}

export default Sprite;