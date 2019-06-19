import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => (
  <Wrapper>
    <GlobalStyles />
    {children}
  </Wrapper>
);

export default Layout;
