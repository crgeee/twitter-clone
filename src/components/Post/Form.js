import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import usePostForm from './usePostForm';

const Wrapper = styled.div`
  & ul {
    list-style: none;
    padding: 0;

    & input[type='text'],
    textarea {
      display: block;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      width: 100%;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }
  }
`;

const Form = () => {
  const sendPost = () => {
    // eslint-disable-next-line no-use-before-define
    console.log(`username: ${inputs.username} post: ${inputs.post}`);
  };

  const { inputs, handleInput, handleSubmit } = usePostForm(
    { username: '', post: '' },
    sendPost
  );

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: '25px' }}
      autoComplete="off"
    >
      <h2>Make a post</h2>
      <Wrapper>
        <ul>
          <li>
            <label htmlFor="username">
              Username
              <input
                type="text"
                name="username"
                onChange={handleInput}
                value={inputs.username}
              />
            </label>
          </li>
          <li>
            <label htmlFor="post">
              Post message
              <textarea
                type="text"
                name="post"
                onChange={handleInput}
                value={inputs.post}
                rows={5}
              />
            </label>
          </li>
          <li>
            <Button type="submit" value="Post" />
          </li>
        </ul>
      </Wrapper>
    </form>
  );
};

export default Form;
