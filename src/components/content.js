import PropTypes from 'prop-types';
import React, { useState } from 'react';
import getRandomInt from '../helper/randomizer';

function Content({ content, article, articleTimeout, onCloseArticle }) {
  const [prompt, setPrompt] = useState(
    getRandomInt(0, content && content.length)
  );

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
      className={`active ${articleTimeout ? 'timeout' : ''}`}
    >
      <h2 className="major">{article}</h2>
      <span className="image main">
        <img src={content[prompt].url} alt="" />
      </span>
      <div style={{ textAlign: 'center', margin: '0 0 8px 0' }}>
        <button onClick={() => randomize()}>Show me another</button>
      </div>
      <div
        contentEditable="true"
        style={{
          height: '300px',
          border: 'solid 1px white',
          borderRadius: '5px'
        }}
      >
        Now go on and write to your heart's content here
      </div>
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
  setWrapperRef: PropTypes.func.isRequired
};

export default Content;
