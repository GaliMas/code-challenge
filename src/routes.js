import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default () =>
  <Router>
    <div className="App">
      <Route path="/" component={Header} />
      <Switch>
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
      <Route path="/" component={Footer} />
    </div>
  </Router>;
