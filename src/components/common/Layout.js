import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
