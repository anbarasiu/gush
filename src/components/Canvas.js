import PropTypes from 'prop-types';
import React from 'react';
import output from '../images/result1.jpg';

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
    };
  }

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

  downloadImage = (el) => {
    const canvas = this.refs.canvas;
    var image = canvas.toDataURL('image/jpg');
    el.href = image;
  };

  render() {
    return (
      <div>
        <div className="canvas-container">
          <canvas
            className="output-canvas"
            ref="canvas"
            width={1080}
            height={1080}
          />
          <a
            ref="download"
            download="gushWriting.jpg"
            href=""
            onClick={this.downloadImage.bind(this)}
          >
            <button>&#8681;</button>
          </a>
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
