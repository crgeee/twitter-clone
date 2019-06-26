import React, { useEffect, useState } from 'react';
import { animated, useTrail } from 'react-spring';
import PropTypes from 'prop-types';
import Tweet from '../common/Tweet';
import Spinner from '../common/Spinner';
import { delay, fetchPosts, fetchUsers } from '../../services/Network';
import Logger from '../../services/Logger';
import Error from '../common/Error';

const Home = props => {
  /**
   * State setters and getters using useState hook
   */
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [animatedPosts, setAnimatedPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  /**
   * Set page title on initialization
   */
  useEffect(() => {
    document.title = props.pageTitle;
  }, []);

  /**
   * Handle scrolling and if it hits the bottom, set fetching state to true.
   */
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }

  /**
   * Fetches additional posts when scrolling to bottom.
   */
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

  /**
   * On initialization load posts and users.
   */
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

  /**
   * Adds event listener for scrolling.
   */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * When isFetching is true, fetch more posts
   */
  useEffect(() => {
    if (!isFetching) return;
    fetchMorePosts();
  }, [isFetching]);

  /**
   * Animation on initial load
   */
  const trail = useTrail(animatedPosts.length, {
    from: { marginLeft: 0, opacity: 0, transform: 'translate3d(0,75px,0)' },
    to: { marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)' }
  });

  /**
   * Show spinner on initialization
   */
  if (isInitialLoad) return <Spinner />;

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
      {isError && <Error>An error occurred. Try again</Error>}
      {isFetching && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

export default Home;
