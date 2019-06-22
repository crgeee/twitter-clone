import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
`;

const Navigation = ({ children }) => {
  return (
    <Outter>
      <Inner>
        {React.Children.map(children, (child, i) => (
          <div key={i.toString()}>{child}</div>
        ))}
      </Inner>
    </Outter>
  );
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired
};
export default Navigation;
