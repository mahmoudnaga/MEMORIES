import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </Layout>
  );
};
export default App;
