import React from 'react';
import Logger from '../../services/Logger';
import ENDPOINT from '../../constants/api';
import withLayout from '../common/withLayout';
import List from '../common/List';

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
    await Promise.all([this.fetchPosts(1), this.fetchUsers()]);
  }

  async fetchPosts(page) {
    await fetch(`${ENDPOINT.POSTS(page)}`)
      .then(results => results.json())
      .then(data => {
        this.setState({ posts: data, page });
      });
  }

  async fetchUsers() {
    await fetch(ENDPOINT.USERS)
      .then(results => results.json())
      .then(data => {
        this.setState({ users: data });
      });
  }

  async onPageScroll() {
    const { page } = this.state;
    this.fetchPosts(page + 1);
  }

  render() {
    const { error, posts, users, loading, onPageScroll} = this.state;

    if (error) {
      return <div>An error occurred. Please try again.</div>;
    }

    if (loading) {
      return <div>loading</div>;
    }
    return (
      <List posts={posts} users={users} isError={error} isLoading={loading} onPageScroll={onPageScroll} />
    );
  }
}

export default withLayout(Home);
