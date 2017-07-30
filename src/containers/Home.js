import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articles';
import Home from '../views/Home';

const normalizeArticles = articles => Object.keys(articles).map(key => articles[key]);
const mapStateToProps = ({ articles }) => ({ articles: normalizeArticles(articles.articlesById) });

const mapDispatchToProps = {
  fetchArticles,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
