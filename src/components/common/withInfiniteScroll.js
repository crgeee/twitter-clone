import React from 'react';

const withInfiniteScroll = conditionFn => WrappedComponent =>
  class WithInfiniteScroll extends React.Component {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll() {
      const { onPaginatedLoad } = this.props;
      // eslint-disable-next-line no-unused-expressions
      conditionFn(this.props) && onPaginatedLoad();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withInfiniteScroll;
