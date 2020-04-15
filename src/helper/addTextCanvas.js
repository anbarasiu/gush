export default function addTextCanvas(
  context,
  text,
  x,
  y,
  maxWidth,
  lineHeight
) {
  let lines = text.split('\n');
  for (let m = 0; m < lines.length; m++) {
    let words = lines[m].split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + ' ';
      let metrics = context.measureText(testLine);
      let testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
      y += lineHeight;
    }
    context.fillText(line, x, y);
  }
}
