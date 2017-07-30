import request from './request';
import { ARTICLES_QUERY, ARTICLE_QUERY } from './queries';

export const fetchArticles = () => request(ARTICLES_QUERY).then(response => response.data.articles);
export const fetchArticle = id =>
  request(ARTICLE_QUERY(id)).then(response => response.data.articles);
