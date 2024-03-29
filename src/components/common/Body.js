import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: #fff;
  width: 100%;
  margin-bottom: 25px;

  h1,
  h2,
  h3 {
    padding: 0;
    margin: 0;
  }
`;
export default Body;
