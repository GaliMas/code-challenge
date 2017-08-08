import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articles';
import { createArticle } from '../actions/article';
import Home from '../views/Home';

const normalizeArticles = articles => Object.keys(articles).map(key => articles[key]);
const mapStateToProps = ({ articles }) => ({ articles: normalizeArticles(articles.articlesById) });

const mapDispatchToProps = {
  fetchArticles,
  createArticle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
