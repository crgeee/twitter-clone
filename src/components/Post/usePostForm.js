import { useState } from 'react';

const usePostForm = (initialValues, callback) => {
  /**
   * Initialize state via useState hook with initial values passed in
   */
  const [inputs, setInputs] = useState(initialValues);

  /**
   * Handles submit for form
   */
  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  /**
   * Handles onChange on input boxes
   */
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
