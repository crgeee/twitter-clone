import React from 'react';
import { animated, useTrail } from 'react-spring';
import Tweet from './Tweet';

const List = props => {
  const { posts, users, isLoading, isError } = props;
  const trail = useTrail(posts.length, {
    from: { marginLeft: 0, opacity: 0, transform: 'translate3d(0,75px,0)' },
    to: { marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)' }
  });
  return (
    !isLoading &&
    !isError && (
      <div>
        {trail.map((styleProps, index) => {
          const { body, id, title, userId } = posts[index];
          return (
            <animated.div key={id} style={styleProps}>
              <Tweet
                user={users[userId]}
                body={body}
                title={title}
                {...props}
              />
            </animated.div>
          );
        })}
      </div>
    )
  );
};

export default List;
