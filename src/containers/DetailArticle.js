import { connect } from 'react-redux';
import { createArticle, fetchArticle, updateArticle, removeArticle } from '../actions/article';
import DetailArticle from '../views/DetailArticle';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id,
  article: state.articles.articleDetailsById[ownProps.match.params.id],
});

const mapDispatchToProps = {
  createArticle,
  fetchArticle,
  updateArticle,
  removeArticle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailArticle);
