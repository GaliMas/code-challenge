import { FETCH_ARTICLES } from '../actions/articles';
import { CREATE_ARTICLE, FETCH_ARTICLE, UPDATE_ARTICLE, REMOVE_ARTICLE } from '../actions/article';

const initialState = {
  articlesById: {},
  articleDetailsById: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES: {
      return {
        articlesById: action.payload.reduce(
          (articlesById, article) => ({ ...articlesById, [article.id]: article }), {},
        ),
        articleDetailsById: state.articleDetailsById,
      };
    }
    case FETCH_ARTICLE: {
      const articleDetailsById = action.payload.reduce(
        (articlesById, article) => ({ ...articlesById, [article.id]: article }), {},
      );
      const articles = state.articlesById;
      return {
        articlesById: { ...articles, ...articleDetailsById },
        articleDetailsById,
      };
    }
    case CREATE_ARTICLE: {
      return {
        articlesById: {
          ...state.articlesById,
          [action.payload.id]: action.payload,
        },
        articleDetailsById: state.articleDetailsById,
      };
    }
    case UPDATE_ARTICLE: {
      return {
        articlesById: {
          ...state.articlesById,
          [action.payload.id]: action.payload,
        },
        articleDetailsById: { [action.payload.id]: action.payload },
      };
    }
    case REMOVE_ARTICLE: {
      const articlesById = Object.keys(state.articlesById)
        .reduce((result, key) => {
          if (key !== action.id) {
            return { [key]: state.articlesById[key] };
          }
          return result;
        }, {});
      return {
        articlesById: {
          ...articlesById,
        },
        articleDetailsById: state.articleDetailsById,
      };
    }
    default: {
      return state;
    }
  }
};
