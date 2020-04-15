import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ link, children }) => (
  <a href={link} target="_blank" rel="noreferrer noopener">
    {children}
  </a>
);

ExternalLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ExternalLink;
