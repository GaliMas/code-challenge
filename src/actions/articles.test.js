import { receiveArticles, FETCH_ARTICLES } from './articles';

const articles = [{
  author: 'Robb Farrell',
  content: 'equi reprehenderit.Magnam delectus totam ab necessitatibus ex molestias et. Harum placeat soluta officiis fuga',
  id: '34234',
}, {
  author: 'Robb Farrell',
  content: 'equi reprehenderit.Magnam delectus totam ab necessitatibus ex molestias et. Harum placeat soluta officiis fuga',
  id: 'fsdfsdf',
}, {
  author: 'Robb Farrell',
  content: 'equi reprehenderit.Magnam delectus totam ab necessitatibus ex molestias et. Harum placeat soluta officiis fuga',
  id: '597df6e630f8171390406fd3',
}];

describe('recieve article', () => {
  it('receive article should create FETCH_ARTICLE action', () => {
    expect(receiveArticles(articles)).toEqual({
      type: FETCH_ARTICLES,
      payload: articles,
    });
  });
});
