import {
  receiveArticle,
  create,
  update,
  remove,
  FETCH_ARTICLE,
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  REMOVE_ARTICLE,
} from './article';

const article = {
  author: 'Robb Farrell',
  content: 'equi reprehenderit.Magnam delectus totam ab necessitatibus ex molestias et. Harum placeat soluta officiis fuga',
  id: '597df6e630f8171390406fd3',
};

describe('recieve article', () => {
  it('receive article should create FETCH_ARTICLE action', () => {
    expect(receiveArticle(article)).toEqual({
      type: FETCH_ARTICLE,
      payload: article,
    });
  });
  it('create article should create CREATE_ARTICLE action', () => {
    expect(create(article)).toEqual({
      type: CREATE_ARTICLE,
      payload: article,
    });
  });
  it('update article should create UPDATE_ARTICLE action', () => {
    expect(update(article)).toEqual({
      type: UPDATE_ARTICLE,
      payload: article,
    });
  });
  it('remove article should create REMOVE_ARTICLE action', () => {
    expect(remove(article.id)).toEqual({
      type: REMOVE_ARTICLE,
      id: article.id,
    });
  });
});
