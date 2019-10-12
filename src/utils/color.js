export default (red = 255, green, blue, alpha) => {
  if (!green || !blue) {
    return `rgba(${red},${red}, ${red}, ${ alpha || 1})`;
  } else {
    return `rgba(${red},${green}, ${blue}, ${ alpha || 1})`;
  }
}