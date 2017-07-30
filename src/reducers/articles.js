import { FETCH_ARTICLES } from '../actions/articles';
import { FETCH_ARTICLE } from '../actions/article';

const initialState = {
  articlesById: {},
  articleDetailsById: {},
};

export default (state = initialState, action) => {
  if (action.type === FETCH_ARTICLES) {
    return {
      articlesById: action.payload.reduce(
        (articlesById, article) => ({ ...articlesById, [article.id]: article }), {},
      ),
      articleDetailsById: state.articleDetailsById,
    };
  } else if (action.type === FETCH_ARTICLE) {
    const articleDetailsById = action.payload.reduce(
      (articlesById, article) => ({ ...articlesById, [article.id]: article }), {},
    );
    const articles = state.articlesById;
    return {
      articlesById: { ...articles, ...articleDetailsById },
      articleDetailsById,
    };
  }
  return state;
};

