import { fetchArticles as getArticles } from '../api';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';

export const receiveArticles = articles => ({
  type: FETCH_ARTICLES,
  payload: articles,
});

export const fetchArticles = () => dispatch => {
  getArticles().then(articles => dispatch(receiveArticles(articles)));
};
