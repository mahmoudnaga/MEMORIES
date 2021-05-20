import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { handleCreatePost, handleUpdatePost } from "../../actions/shared";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) => (currentId ? state.posts.find((post) => post._id === currentId) : null));
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(handleUpdatePost(currentId, postData));
    } else {
      dispatch(handleCreatePost(postData));
    }
    clear();
  };

  const handleOnChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.name === "tags" ? e.target.value.split(",") : e.target.value,
    });
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? "Editing" : "Creating"} a Memory</Typography>
        <TextField
          variant="outlined"
          label="Creator"
          name="creator"
          fullWidth
          value={postData.creator}
          onChange={handleOnChange}
        />
        <TextField
          variant="outlined"
          label="Title"
          name="title"
          fullWidth
          value={postData.title}
          onChange={handleOnChange}
        />
        <TextField
          variant="outlined"
          label="Message"
          name="message"
          fullWidth
          value={postData.message}
          onChange={handleOnChange}
        />
        <TextField
          variant="outlined"
          label="Tags"
          name="tags"
          fullWidth
          value={postData.tags}
          onChange={handleOnChange}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth>
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default Form;
