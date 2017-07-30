import { connect } from 'react-redux';
import { fetchArticle } from '../actions/article';
import DetailArticle from '../views/DetailArticle';

const mapStateToProps = (state, ownProps) =>
  ({
    id: ownProps.match.params.id,
    article: state.articles.articleDetailsById[ownProps.match.params.id],
  });

const mapDispatchToProps = {
  fetchArticle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailArticle);
