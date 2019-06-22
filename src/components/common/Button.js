import styled from 'styled-components';

const Button = styled.input`
  padding: 6px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  color: #fff;
  background-color: #2196f3;
  margin: 8px;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: none;
  position: relative;
  align-items: center;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  -moz-user-select: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
`;

export default Button;
