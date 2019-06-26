import React from 'react';
import Form from '../common/Form';
import Button from '../common/Button';
import usePostForm from './usePostForm';

const PostForm = () => {
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
    <Form>
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
    </Form>
  );
};

export default PostForm;
