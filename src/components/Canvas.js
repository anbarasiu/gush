import React from 'react';
import output1 from '../images/result1.jpg';
import output2 from '../images/result2.jpg';
import output3 from '../images/result3.jpg';
import output4 from '../images/result4.jpg';
import getRandomInt from '../helper/randomizer';
import addTextCanvas from '../helper/addTextCanvas';
import { isShareAvailable, share } from '../helper/share';

const outputFiles = [output1, output2, output3, output4];

class Canvas extends React.Component {
  shouldComponentUpdate(newProps) {
    let { shouldFrame } = newProps;
    return shouldFrame;
  }

  updateCanvas = () => {
    const { text } = this.props;
    let { isFrameUpdated } = this.props;
    const canvas = this.refs.canvas;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const img = this.refs.image;
      if (img) {
        ctx.drawImage(img, 0, 0, 1080, 1080);
        ctx.font = 'bold 48px Courier';
        addTextCanvas(ctx, text, 32, 32, 1080, 24);
        this.watermark(ctx);
      }
    }
    isFrameUpdated();
  };

  watermark = (context) => {
    let line = 'gush.surge.sh';
    let x = 700;
    let y = 1050;
    context.fillText(line, x, y);
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

  shareImage = () => {
    const canvas = this.refs.canvas;
    let url = canvas.toDataURL('image/png');
    share(url);
  };

  render() {
    let output = outputFiles[getRandomInt(0, 3)];
    this.updateCanvas();
    return (
      <div>
        <div className="canvas-container">
          <canvas
            className="output-canvas"
            ref="canvas"
            width={1080}
            height={1080}
          />
          <button className="download" onClick={this.downloadImage}>
            Download &#8681;
          </button>
          {isShareAvailable && (
            <button className="share" onClick={this.shareImage}>
              Share &#9829;
            </button>
          )}
        </div>
        {output && (
          <img
            ref="image"
            width={200}
            height={200}
            src={output}
            style={{ display: 'none' }}
          />
        )}
      </div>
    );
  }
}
export default Canvas;
