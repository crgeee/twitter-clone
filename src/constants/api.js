const base = `https://jsonplaceholder.typicode.com`;
const ENDPOINT = {
  POSTS: (page, limit = 10) => `${base}/posts?_page=${page}&_limit=${limit}`,
  USERS: `${base}/users`
};

export default ENDPOINT;
