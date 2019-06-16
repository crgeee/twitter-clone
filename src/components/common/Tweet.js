import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px
  border: 1px solid #000;
`;
const StyledTitle = styled.div``;
const StyledBody = styled.div``;

const Tweet = ({ body, title, user }) => (
  <StyledWrapper>
    <StyledTitle>
      {user.name} // {user.username} // {title}
    </StyledTitle>
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
