import React from 'react';
import Logger from '../../services/Logger';
import List from '../common/List';
import { delay, fetchPosts, fetchUsers } from '../../services/Network';
import Spinner from '../common/Spinner';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
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
    const { page } = this.state;
    await delay(1000);
    await Promise.all([fetchPosts(), fetchUsers(page + 1)]).then(
      ([postsResult, usersResult]) => {
        this.setState({ posts: postsResult, users: usersResult, page });
      }
    );
  }

  render() {
    const { error, posts, users, loading } = this.state;

    if (error) {
      return <div>An error occurred. Please try again.</div>;
    }

    if (loading) {
      return <Spinner />;
    }
    return (
      <List posts={posts} users={users} isError={error} isLoading={loading} />
    );
  }
}

export default Home;
