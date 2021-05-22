import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import LoginPage from './LoginPage';
import ArticlePage from './ArticlePage';
import history from './history';

const App = () => {
  return (
      <Router history={history}>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route component={ArticlePage} />
        </Switch>
      </Router>
  );
};

export default App;