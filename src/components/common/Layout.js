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

const Content = styled.div`
  max-width: 500px;
`;

const Navigation = styled.div`
  margin-top: 25px;
`;

const Layout = ({ children }) => (
  <Wrapper>
    <GlobalStyles />
    <Navigation>home - post</Navigation>
    <Content>{children}</Content>
  </Wrapper>
);

export default Layout;
