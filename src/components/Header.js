import PropTypes from 'prop-types';
import React from 'react';

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Gush</h1>
        <p>
          <b>Let's jump over that block and get the creative juices flowing</b>
        </p>
        <p>
          Get inspired with prompts, write & publish with beautiful pictures
        </p>
        <p>
          <b>What would you like to write today?</b>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('story');
            }}
          >
            Maybe a Story?
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('poetry');
            }}
          >
            some Poetry?
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('word');
            }}
          >
            Just words
          </button>
        </li>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact');
            }}
          >
            Contact
          </button>
        </li> */}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
