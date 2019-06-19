import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 10px;
`;

const Navigation = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Navigation;
