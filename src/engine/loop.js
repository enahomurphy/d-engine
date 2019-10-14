
let frameCount = 0;
let fpsInterval, startTime, now, then, elapsed;

function Engine (config = {}) {
    fpsInterval = 1000 / config.fps;
    then = window.performance.now();
    startTime = then;

    this.showFrame = config.showFrame || false;
    this.stopEngine = false;
}

Engine.prototype.load = function(draw) {
  this.draw = draw;

  return this;
}

Engine.prototype.start = function (timestamp) {
  if (this.stopEngine) {
      return;
  }

  requestAnimationFrame(this.start.bind(this));

  now = timestamp;
  elapsed = timestamp - then;

  if (elapsed > fpsInterval) {
    this.draw();

    then = timestamp - (elapsed % fpsInterval);

    if (this.showFrame) {
      const results = document.getElementById(this.frameId);
      const sinceStart = now - startTime;
      const currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
      results.innerText = "Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.";
    }
  }
}

Engine.prototype.stop = function() {
  this.stopEngine = true;
}

export default Engine;