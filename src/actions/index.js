import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://localhost:3001';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchPosts() {
  const request =  axios.get(`${ROOT_URL}/posts${API_KEY}`);
  console.log(request)

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
