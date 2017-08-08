import {
  fetchArticle as fetchArticleApi,
  createArticle as createArticleApi,
  removeArticle as removeArticleApi,
  updateArticle as updateArticleApi,
} from '../api';

export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';

const decode = article => {
  if (Array.isArray(article)) {
    const decodedArticle = article.reduce((result, art) =>
      ({ ...result, ...art, content: decodeURIComponent(art.content) }), {});
    return [decodedArticle];
  }
  return {
    ...article,
    content: decodeURIComponent(article.content),
  };
};

export const receiveArticle = article => ({
  type: FETCH_ARTICLE,
  payload: article,
});

export const create = article => ({
  type: CREATE_ARTICLE,
  payload: article,
});

export const remove = id => ({
  type: REMOVE_ARTICLE,
  id,
});

export const update = article => ({
  type: UPDATE_ARTICLE,
  payload: article,
});

export const fetchArticle = id => dispatch => {
  fetchArticleApi(id).then(article => dispatch(receiveArticle(decode(article))));
};

export const createArticle = ({ author, title, content, published, tags }) => dispatch => {
  createArticleApi({ author, title, content, published, tags })
    .then(article => dispatch(create(article)));
};

export const updateArticle = ({ id, author, title, content, published, tags }) => dispatch => {
  updateArticleApi({ id, author, title, content, published, tags })
    .then(article => dispatch(update(decode(article))));
};

export const removeArticle = id => dispatch => {
  removeArticleApi(id).then(article => dispatch(remove(article)));
};
