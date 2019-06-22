import React from 'react';
import PropTypes from 'prop-types';
import Logger from '../../services/Logger';
import List from '../common/List';
import { delay, fetchPosts, fetchUsers } from '../../services/Network';
import Spinner from '../common/Spinner';
import Error from '../common/Error';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      errorMessage: undefined,
      page: 0,
      posts: undefined,
      users: undefined
    };
  }

  componentDidMount() {
    this.initialize().then(() => {
      this.setState({ loading: false });
      Logger.info('home loaded');
    });
  }

  async initialize() {
    const { title } = this.props;
    document.title = title;
    const { page } = this.state;
    await delay(500);
    await Promise.all([fetchPosts(), fetchUsers(page + 1)])
      .then(([postsResult, usersResult]) => {
        this.setState({ posts: postsResult, users: usersResult, page });
      })
      .catch(error => {
        this.setState({
          error: true,
          errorMessage: error.message,
          loading: false
        });
      });
  }

  render() {
    const { error, errorMessage, posts, users, loading } = this.state;

    if (error) {
      return <Error>An error occurred. {errorMessage}</Error>;
    }

    if (loading) {
      return <Spinner />;
    }
    return (
      <List posts={posts} users={users} isError={error} isLoading={loading} />
    );
  }
}

Home.propTypes = {
  title: PropTypes.string.isRequired
};

export default Home;
