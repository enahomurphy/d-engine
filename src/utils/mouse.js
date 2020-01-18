let eventRegistered = false;

let mouseX = 0;
let mouseY = 0;

export default (canvasId) => {
  if (!eventRegistered) {
    const element = canvasId ? document.getElementById(canvasId) : document;
    element.addEventListener('mousemove', () => {
      mouseX = event.clientX;
      mouseY = event.clientY;
  
      eventRegistered = true;
    });
  }
  
  return { mouseX, mouseY };
}
