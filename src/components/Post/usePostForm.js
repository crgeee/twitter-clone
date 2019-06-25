import { useState } from 'react';

const usePostForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleInput = event => {
    event.persist();
    setInputs(localInputs => ({
      ...localInputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInput,
    inputs
  };
};

export default usePostForm;
