import PropTypes from 'prop-types';
import React from 'react';
import output1 from '../images/result1.jpg';
import output2 from '../images/result2.jpg';
import output3 from '../images/result3.jpg';
import output4 from '../images/result4.jpg';
import getRandomInt from '../helper/randomizer';
const outputFiles = [output1, output2, output3, output4];
class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.downloadImage = this.downloadImage.bind(this);
  }
  componentDidMount() {
    const { text } = this.props;
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const img = this.refs.image;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 1080, 1080);
      ctx.font = '32px Courier';
      this.wrapText(ctx, text, 32, 32, 1080, 48);
      this.watermark(ctx);
    };
  }

  watermark = (context) => {
    let line = 'gush.surge.sh';
    let x = 800;
    let y = 1050;
    context.fillText(line, x, y);
  };

  wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    var lines = text.split('\n');
    for (var m = 0; m < lines.length; m++) {
      var words = lines[m].split(' ');
      var line = '';
      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
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
  };

  downloadImage = () => {
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'GushWriting.png');
    const canvas = this.refs.canvas;
    canvas.toBlob(function(blob) {
      let url = URL.createObjectURL(blob);
      downloadLink.setAttribute('href', url);
      downloadLink.click();
    });
  };

  render() {
    let output = outputFiles[getRandomInt(0, 3)];
    return (
      <div>
        <div className="canvas-container">
          <canvas
            className="output-canvas"
            ref="canvas"
            width={1080}
            height={1080}
          />
          <button onClick={this.downloadImage.bind(this)}>
            Download &#8681;
          </button>
        </div>
        <img
          ref="image"
          width={200}
          height={200}
          src={output}
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}
export default Canvas;
