import { fetchArticles as getArticles } from '../api';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';

const decode = articles => articles.map(article =>
  ({ ...article, content: decodeURIComponent(article.content) }));

export const receiveArticles = articles => ({
  type: FETCH_ARTICLES,
  payload: articles,
});

export const fetchArticles = () => dispatch => {
  getArticles().then(articles => dispatch(receiveArticles(decode(articles))));
};
