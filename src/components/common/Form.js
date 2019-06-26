import styled from 'styled-components';

const Form = styled.div`
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

export default Form;
