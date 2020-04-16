import PropTypes from 'prop-types';
import React, { useState } from 'react';
import getRandomInt from '../helper/randomizer';
import Canvas from './Canvas';
import Accordion from './Accordion';

function Content({ content = [], article, articleTimeout, onCloseArticle }) {
  const [prompt, setPrompt] = useState(
    getRandomInt(0, content && content.length)
  );
  const [text, setText] = useState('');
  const [shouldFrame, setShouldFrame] = useState(false);

  let close = (
    <div
      className="close"
      onClick={() => {
        onCloseArticle();
      }}
    ></div>
  );

  let randomize = () => {
    let prompt = getRandomInt(0, content && content.length);
    setPrompt(prompt);
  };

  let isFrameUpdated = () => {
    setShouldFrame(false);
  };

  let isContentAvailable = () => {
    return content.length > 0 && content[prompt];
  };

  return (
    <article
      id="content"
      className={`content active ${articleTimeout ? 'timeout' : ''}`}
    >
      <h2 className="major">{article}</h2>
      <Accordion allowMultipleOpen>
        <div label="Get inspired" className="imageContainer center" isOpen>
          <div className="image main center">
            {isContentAvailable && <img src={content[prompt].url} alt="" />}
            <button className="refresh" onClick={() => randomize()}>
              <span>&#x21bb;</span>
            </button>
          </div>
        </div>
        <div label="Write and Frame">
          <textarea
            onChange={(e) => setText(e.target.value)}
            className="editor"
            placeholder="Now go on and write to your heart's content here"
          ></textarea>
          <div className="center">
            <button onClick={() => setShouldFrame(true)}>Frame It!</button>
          </div>
        </div>
        <div label="Download and Share" isOpen>
          <div className="center">
            <Canvas
              text={text}
              shouldFrame={shouldFrame}
              isFrameUpdated={isFrameUpdated}
            />
          </div>
        </div>
      </Accordion>
      {close}
    </article>
  );
}

Content.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Content;
