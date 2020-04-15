import PropTypes from 'prop-types';
import React from 'react';
import Contact from '../components/contact';
import Content from './content';

class Main extends React.Component {
  renderContainer(article) {
    const { words, stories, poems } = this.props.pins;
    switch (article) {
      case 'poetry':
        return <Content content={poems} {...this.props} />;
      case 'story':
        return <Content content={stories} {...this.props} />;
      case 'word':
        return <Content content={words} {...this.props} />;
      default:
        return <></>;
    }
  }
  render() {
    const { article } = this.props;
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {this.renderContainer(article)}
        {close}
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
