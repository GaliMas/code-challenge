import request from './request';
import { ARTICLES_QUERY, ARTICLE_QUERY, CREATE_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE } from './queries';

export const fetchArticles = () => request(ARTICLES_QUERY).then(response => response.data.articles);

export const fetchArticle = id =>
  request(ARTICLE_QUERY(id)).then(response => response.data.article);

export const createArticle = article =>
  request(CREATE_ARTICLE(article)).then(response => response.data.createArticle);

export const updateArticle = article =>
  request(UPDATE_ARTICLE(article)).then(response => response.data.updateArticle);

export const removeArticle = id =>
  request(REMOVE_ARTICLE(id)).then(response => response.data.removeArticle);
