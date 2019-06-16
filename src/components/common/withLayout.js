import React from 'react';
import styled from 'styled-components';
import SIZES from '../../constants/style';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;

  @media (max-width: ${SIZES.tablet}) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const StyledLeft = styled.div`
  flex: 1;

  @media (max-width: ${SIZES.tablet}) {
    flex-basis: 100%;
    flex: 0;
  }
`;

const StyledMiddle = styled.div`
  flex: 1;

  @media (max-width: ${SIZES.tablet}) {
    flex: 0;
  }
`;

const StyledRight = styled.div`
  flex: 1;

  @media (max-width: ${SIZES.tablet}) {
    flex: 0;
  }
`;

const withLayout = WrappedComponent => {
  return class Layout extends React.PureComponent {
    render() {
      return (
        <div>
          <StyledWrapper>
            <StyledLeft />
            <StyledMiddle>
              <WrappedComponent {...this.props} />
            </StyledMiddle>
            <StyledRight />
          </StyledWrapper>
        </div>
      );
    }
  };
};
export default withLayout;
