import { fetchArticle as getArticle } from '../api';

export const FETCH_ARTICLE = 'FETCH_ARTICLE';

export const receiveArticle = article => ({
  type: FETCH_ARTICLE,
  payload: article,
});

export const fetchArticle = id => dispatch => {
  getArticle(id).then(article => dispatch(receiveArticle(article)));
};
