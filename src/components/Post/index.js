import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Body from '../common/Body';
import Form from './Form';

const Post = props => {
  /**
   * Set page title on start up
   */
  useEffect(() => {
    document.title = props.pageTitle;
  }, []);

  return (
    <Body>
      <Form />
    </Body>
  );
};

Post.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

export default Post;
