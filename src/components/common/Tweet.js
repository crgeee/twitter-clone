import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-bottom: 20px;
`;
const StyledTitle = styled.div`
  padding: 32px;
`;
const StyledBody = styled.div`
  padding: 0 32px 0 32px;
`;

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
