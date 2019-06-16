import React from 'react';
import styled from 'styled-components';
import Logger from '../../services/Logger';
import Tweet from '../common/Tweet';
import SIZES from '../../constants/style';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      error: false,
      posts: undefined,
      users: undefined
    };
  }

  componentDidMount() {
    this.initialize().then(() => {
      this.setState({ ready: true });
      Logger.info('home loaded');
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async initialize() {
    await Promise.all([this.fetchPosts(), this.fetchUsers()]);
  }

  async fetchPosts() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(results => results.json())
      .then(data => {
        this.setState({ posts: data });
      });
  }

  async fetchUsers() {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(results => results.json())
      .then(data => {
        this.setState({ users: data });
      });
  }

  render() {
    const { ready, error, posts, users } = this.state;

    if (error) {
      return <div>An error occurred. Please try again.</div>;
    }

    if (!ready) {
      return <div>loading</div>;
    }
    return (
      <StyledWrapper>
        <StyledLeft />
        <StyledMiddle>
          {posts.map(item => {
            return <Tweet key={item.id} user={users[item.userId]} {...item} />;
          })}
        </StyledMiddle>
        <StyledRight />
      </StyledWrapper>
    );
  }
}

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

export default Home;
