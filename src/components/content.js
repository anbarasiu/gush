import PropTypes from 'prop-types';
import React, { useState } from 'react';
import getRandomInt from '../helper/randomizer';
import Canvas from './Canvas';

function Content({ content, article, articleTimeout, onCloseArticle }) {
  const [prompt, setPrompt] = useState(
    getRandomInt(0, content && content.length)
  );
  const [text, setText] = useState('');
  const [isImageGenerated, setIsImageGenerated] = useState(false);

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

  return (
    <article
      id="content"
      className={`content active ${articleTimeout ? 'timeout' : ''}`}
    >
      <h2 className="major">{article}</h2>
      <div className="imageContainer">
        <span className="image main">
          <img src={content[prompt].url} alt="" />
        </span>
        <span>
          <button onClick={() => randomize()}>Show me another</button>
        </span>
      </div>
      <textarea
        onChange={(e) => setText(e.target.value)}
        className="editor"
        placeholder="Now go on and write to your heart's content here"
      ></textarea>
      <div className="center">
        <button onClick={() => setIsImageGenerated(true)}>Frame It!</button>
      </div>
      {isImageGenerated && (
        <div className="center">
          <Canvas text={text} />
        </div>
      )}
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
