const { json } = require("express");
const mongoose = require("mongoose");
const postMessage = require("../models/postMessage");

const getPosts = async (req, res) => {
  try {
    const posts = await postMessage.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new postMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");
  const updatedPost = await postMessage.findByIdAndUpdate(id, post, { new: true, useFindAndModify: false });
  res.json(updatedPost);
};
const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");
  await postMessage.findByIdAndDelete(id);
  res.json({ message: "Post deleted successfully" });
};
const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");
  const post = await postMessage.findById(id);
  const updatedPost = await postMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true, useFindAndModify: false }
  );
  res.json(updatedPost);
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
};
