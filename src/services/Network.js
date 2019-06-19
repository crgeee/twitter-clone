import ENDPOINT from '../constants/api';

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function fetchPosts(page) {
  return fetch(`${ENDPOINT.POSTS(page)}`).then(results => results.json());
}

function fetchUsers() {
  return fetch(ENDPOINT.USERS).then(results => results.json());
}

export { delay, fetchPosts, fetchUsers };
