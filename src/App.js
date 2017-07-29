import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';
import Header from './components/Header';
import { CardList } from './components/Card';
import Footer from './components/Footer';

class App extends Component {
  // definition
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentDidMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <div className="App">
        <Header />
        <CardList cards={this.state.articles} />
        <Footer />
      </div>
    );
  }
}

export default App;
