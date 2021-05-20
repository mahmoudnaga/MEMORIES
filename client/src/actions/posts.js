import { FETCH_ALL, CREATE, UPDATE, DELETE } from "./constants";

export const getPosts = (posts) => ({
  type: FETCH_ALL,
  posts,
});
export const createPost = (post) => ({
  type: CREATE,
  post,
});
export const updatePost = (post) => ({
  type: UPDATE,
  post,
});
export const deletePost = (id) => ({
  type: DELETE,
  id,
});

