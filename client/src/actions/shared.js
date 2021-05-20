import * as api from "../api";
import { getPosts, createPost, updatePost, deletePost } from "./posts";

export const handleGetPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    const posts = response.data;
    dispatch(getPosts(posts));
  } catch (error) {
    console.log(error);
  }
};
export const handleCreatePost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch(createPost(data));
  } catch (error) {
    console.log(error);
  }
};
export const handleUpdatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch(updatePost(data));
  } catch (error) {
    console.log(error);
  }
};
export const handleDeletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch(deletePost(id));
  } catch (error) {
    console.log(error);
  }
};
export const handleLikePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch(updatePost(data));
  } catch (error) {
    console.log(error);
  }
};
