import PropTypes from 'prop-types';
import React from 'react';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Gush</h1>
        <p>Let's jump over that block and get the creative juices flowing</p>
        <p>What would you like to write today?</p>
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
            String together Poetry
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('word');
            }}
          >
            Just show me words
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
  timeout: PropTypes.bool
};

export default Header;
