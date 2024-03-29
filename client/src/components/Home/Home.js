import React, { useEffect, useState } from "react";
import { Container, Grid, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";
import Posts from "../Post/Posts/Posts";
import { handleGetPosts } from "../../actions/shared";
import useStyles from "../../styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(handleGetPosts());
  }, [dispatch]);
  
  return (
    <Grow in>
      <Container>
        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
