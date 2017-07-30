import { receiveArticle, FETCH_ARTICLE } from './article';

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
});
