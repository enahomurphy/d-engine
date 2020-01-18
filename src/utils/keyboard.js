
const keyPress = (cb) => {
  document.addEventListener('keypress', cb);
}

const keyDown = (cb) => {
  document.addEventListener('keydown', cb);
}

const keyUp = (cb) => {
  document.addEventListener('keyup', cb);
}

export default {
  keyPress,
  keyDown,
  keyUp
}