import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Form from '../common/Form';
import Logger from '../../services/Logger';
import Error from '../common/Error';

const Post = () => {
  const [username, setUsername] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);
  const [post, setPost] = useState('');
  const [postValid, setPostValid] = useState(true);
  const [fieldErrors, setFieldErrors] = useState([]);
  const [formValid, setFormValid] = useState(true);

  const handlePostInput = e => {
    const { name } = e.target;
    const { value } = e.target;
    if (name === 'post') {
      setPost(value);
    } else if (name === 'username') {
      setUsername(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    Logger.info('handleSubmit hit!');
  };

  const validateForm = () => {
    setFormValid(postValid && usernameValid);
  };

  const validateField = (fieldName, value) => {
    const fieldValidationErrors = this.state.formErrors;

    switch (fieldName) {
      case 'username':
        break;
      case 'post':
        break;
      default:
        Logger.warn('no field to validate');
        break;
    }
    validateForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Make a post</h2>
        <ol>
          <li>
            <label htmlFor="username">Username</label>
          </li>
          <li>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handlePostInput}
              value={username}
            />
          </li>
          {!usernameValid && (
            <li>
              <Error>{fieldErrors[username]}</Error>
            </li>
          )}
          <li>
            <label htmlFor={post}>Post message</label>
          </li>
          <li>
            <textarea
              type="text"
              name="post"
              onChange={handlePostInput}
              value={post}
            />
          </li>
          {!postValid && (
            <li>
              <Error>{fieldErrors[username]}</Error>
            </li>
          )}
          <li>
            <Button type="submit" value="Post" />
          </li>
        </ol>
      </form>
    </div>
  );
};

export default Post;
