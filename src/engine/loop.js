
let frameCount = 0;
let fpsInterval, startTime, now, then, elapsed;

const getDefaults = (config) => {
  if (!config.draw) {
    return { ...config, draw: () => {} }
  }

  return config;
}

function animate (fps, config) {
    fpsInterval = 1000 / fps;
    then = window.performance.now();
    startTime = then;
    loop.bind(getDefaults(config)).call();
}

function loop (timestamp) {
  if (this.stop) {
      return;
  }

  requestAnimationFrame(loop.bind(this));

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

export default animate;