import React from 'react';
import withInfiniteScroll from './withInfiniteScroll';
import Tweet from './Tweet';

const List = ({ posts, users, isLoading, isError }) => {
  return (
    !isLoading &&
    !isError && (
      <div>
        {posts.map(item => {
          return <Tweet Key={item.id} user={users[item.userId]} {...item} />;
        })}
      </div>
    )
  );
};

const infiniteScrollCondition = props =>
  window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
  props.list.length &&
  !props.isLoading &&
  !props.isError;

export default withInfiniteScroll(infiniteScrollCondition)(List);
