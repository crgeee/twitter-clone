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
      color: #000;
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
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: inputs.title,
        body: inputs.body,
        userId: inputs.username
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  const { inputs, handleInput, handleSubmit } = usePostForm(
    { username: '', body: '', title: '' },
    sendPost
  );

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: '25px' }}
      autoComplete="off"
    >
      <h2>Create a post</h2>
      <Wrapper>
        <ul>
          <li>
            <label
              htmlFor="username"
              style={{
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              <div style={{ width: '80px' }}>Username</div>
              <div style={{ flexGrow: 1, paddingLeft: '10px' }}>
                <input
                  type="text"
                  name="username"
                  onChange={handleInput}
                  value={inputs.username}
                />
              </div>
            </label>
          </li>
          <li>
            <label
              htmlFor="title"
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '10px 0'
              }}
            >
              <div style={{ width: '80px' }}>Title</div>
              <div style={{ flexGrow: 1, paddingLeft: '10px' }}>
                <input
                  type="text"
                  name="title"
                  onChange={handleInput}
                  value={inputs.title}
                />
              </div>
            </label>
          </li>
          <li>
            <label
              htmlFor="body"
              style={{
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              <div style={{ width: '80px' }}>Body</div>
              <div style={{ flexGrow: 1, paddingLeft: '10px' }}>
                <textarea
                  type="text"
                  name="body"
                  onChange={handleInput}
                  value={inputs.body}
                  rows={5}
                  style={{ resize: 'none' }}
                />
              </div>
            </label>
          </li>
          <li
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'right'
            }}
          >
            <Button type="submit" value="Post" />
          </li>
        </ul>
      </Wrapper>
    </form>
  );
};

export default Form;
