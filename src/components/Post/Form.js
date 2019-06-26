import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import usePostForm from './usePostForm';

const Wrapper = styled.div`
  .form-main {
    padding: 25px;
  }

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

    .form-label {
      display: flex;
      flex-direction: row;
      padding: 10px 0;
    }

    .form-input-name {
      width: 85px;
    }

    .form-input-value {
      flex-grow: 1;
      padding-left: 10px;
    }

    .form-submit-button {
      display: flex;
      flex-direction: row;
      justify-content: right;
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
    <Wrapper>
      <form className="form-main" onSubmit={handleSubmit} autoComplete="off">
        <h2>Create a post</h2>
        <ul>
          <li>
            <label htmlFor="username" className="form-label">
              <div className="form-input-name">Username</div>
              <div className="form-input-value">
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
            <label htmlFor="title" className="form-label">
              <div className="form-input-name">Title</div>
              <div className="form-input-value">
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
            <label htmlFor="body" className="form-label">
              <div className="form-input-name">Body</div>
              <div className="form-input-value">
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
          <li className="form-submit-button">
            <Button type="submit" value="Post" />
          </li>
        </ul>
      </form>
    </Wrapper>
  );
};

export default Form;
