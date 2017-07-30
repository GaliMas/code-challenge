import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import DetailArticle from './containers/DetailArticle';
import Header from './components/Header';
import Footer from './components/Footer';

export default () =>
  <Router>
    <div className="App">
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={DetailArticle} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
      <Route path="/" component={Footer} />
    </div>
  </Router>;
