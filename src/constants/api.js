const base = `https://jsonplaceholder.typicode.com`;
const ENDPOINT = {
  POSTS: page => `${base}/posts?_page=${page}&_limit=10`,
  USERS: `${base}/users`
};

export default ENDPOINT;
