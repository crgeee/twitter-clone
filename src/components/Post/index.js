import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Body from '../common/Body';
import PostForm from './PostForm';

const Post = props => {
  /**
   * Set page title on start up
   */
  useEffect(() => {
    document.title = props.pageTitle;
  }, []);

  return (
    <Body>
      <PostForm />
    </Body>
  );
};

Post.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

export default Post;
