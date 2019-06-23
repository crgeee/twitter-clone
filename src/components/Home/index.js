import React, { useEffect, useState } from 'react';
import { animated, useTrail } from 'react-spring';
import Tweet from '../common/Tweet';
import Spinner from '../common/Spinner';
import { delay, fetchPosts, fetchUsers } from '../../services/Network';
import Logger from '../../services/Logger';
import Error from '../common/Error';

const Home = props => {
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [animatedPosts, setAnimatedPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }

  function fetchMorePosts() {
    const localPage = page + 1;
    return fetchPosts(localPage)
      .then(results => {
        const newPosts = [...posts, ...results];
        setPosts(newPosts);
      })
      .catch(error => {
        setIsError(true);
        Logger.error(error);
      })
      .finally(() => {
        setIsFetching(false);
        setPage(localPage);
      });
  }

  useEffect(() => {
    delay(500);
    const localPage = page + 1;
    Promise.all([fetchPosts(localPage), fetchUsers()])
      .then(([postsResult, usersResult]) => {
        setAnimatedPosts(postsResult);
        setUsers(usersResult);
      })
      .catch(error => {
        setIsError(true);
        Logger.error(error);
      })
      .finally(() => {
        setIsInitialLoad(false);
        setPage(localPage);
      });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMorePosts();
  }, [isFetching]);

  const trail = useTrail(animatedPosts.length, {
    from: { marginLeft: 0, opacity: 0, transform: 'translate3d(0,75px,0)' },
    to: { marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)' }
  });

  if (isInitialLoad) return <Spinner />;

  if (isError) return <Error />;

  return (
    <div>
      {trail.map((styleProps, index) => {
        const { body, id, title, userId } = animatedPosts[index];
        return (
          <animated.div key={id} style={styleProps}>
            <Tweet user={users[userId]} body={body} title={title} {...props} />
          </animated.div>
        );
      })}
      {posts.map(item => {
        const { body, id, title, userId } = item;
        return (
          <div key={id}>
            <Tweet user={users[userId]} body={body} title={title} {...props} />
          </div>
        );
      })}
      {isFetching && <div>Fetching results...</div>}
    </div>
  );
};

export default Home;
