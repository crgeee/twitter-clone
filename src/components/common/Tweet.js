import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: #fff;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  padding: 25px;

  &:hover {
    background-color: #e9e9e9;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
  }
`;

const StyledHeader = styled.div`
  padding-bottom: 25px;
`;

const StyledBody = styled.div``;

const StyledName = styled.span`
  padding-right: 5px;
  font-size: 14px;
`;

const StyledUsername = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: #666;
`;

const StyledTitle = styled.span`
  font-size: 18px;
  font-weight: 800;
`;

const Tweet = ({ body, title, user }) => (
  <StyledWrapper>
    <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
      <br />
      <StyledName>Posted by {user.name}</StyledName>
      <StyledUsername>@{user.username}</StyledUsername>
    </StyledHeader>
    <StyledBody>{body}</StyledBody>
  </StyledWrapper>
);

Tweet.defaultProps = {
  user: {}
};

Tweet.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string
  })
};

export default Tweet;
