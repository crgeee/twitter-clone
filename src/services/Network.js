import ENDPOINT from '../constants/api';

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function fetchPosts(page, limit) {
  return fetch(`${ENDPOINT.POSTS(page, limit)}`).then(results =>
    results.json()
  );
}

function fetchUsers() {
  return fetch(ENDPOINT.USERS).then(results => results.json());
}

export { delay, fetchPosts, fetchUsers };
