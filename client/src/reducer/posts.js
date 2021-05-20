import { CREATE, DELETE, FETCH_ALL, UPDATE } from "../actions/constants";

const posts = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.posts;
    case CREATE:
      return [...posts, action.post];
    case UPDATE:
      return posts.map((post) => (post._id === action.post._id ? action.post : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.id);
    default:
      return posts;
  }
};
export default posts;
