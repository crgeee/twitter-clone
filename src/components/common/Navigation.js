import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Outter = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 100%;
  background-color: #fff;
`;

const Inner = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & svg {
    padding-right: 6px;
  }
`;

const Title = styled.div``;

const RightNav = styled.div`
  display: flex;
  flex-direction: row;
  & div {
    padding: 0 10px;
  }

  & a {
    text-decoration: none;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    color: #333;

    &:hover {
      color: #a9a9a9;
    }
  }
`;

const Navigation = ({ children }) => {
  return (
    <Outter>
      <Inner>
        <Title>
          <FontAwesomeIcon icon={faCoffee} />
          <span>tweeter</span>
        </Title>
        <RightNav>
          {React.Children.map(children, (child, i) => (
            <div key={i.toString()}>{child}</div>
          ))}
        </RightNav>
      </Inner>
    </Outter>
  );
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired
};
export default Navigation;
