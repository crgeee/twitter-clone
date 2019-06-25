import React from 'react';
import styled from 'styled-components';
import ManSvg from '../../assets/016-man.svg';

const Wrapper = styled.div`
  min-width: 60px;
  height: 50px;
`;

const StyledAvatar = styled.div`
  transform: scale(0.1);
  -webkit-transform: scale(0.1);
  width: 35px;
  height: 35px;
  margin: -10px 0 0 -20px;
`;

const Avatar = () => (
  <Wrapper>
    <StyledAvatar>
      <ManSvg />
    </StyledAvatar>
  </Wrapper>
);

export default Avatar;
