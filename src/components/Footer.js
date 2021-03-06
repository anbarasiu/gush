import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p>
      <Link to="/contribute">&#9829; Make Gush Better</Link>
    </p>
    <p className="copyright">
      &copy;
      <a href="https://www.twitter.com/anbarasiu">@anbarasiu</a>
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
