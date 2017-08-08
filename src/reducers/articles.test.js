import reducer from './articles';
import { FETCH_ARTICLE, CREATE_ARTICLE, UPDATE_ARTICLE, REMOVE_ARTICLE } from '../actions/article';
import { FETCH_ARTICLES } from '../actions/articles';

const initialState = {
  articlesById: {},
  articleDetailsById: {},
};

const article = {
  author: 'Robb Farrell',
  content: 'ex molestias et. Harum placeat soluta officiis fuga.↵',
  id: '5467',
  published: false,
  tags: ['convergence', 'Run plum exploit'],
  title: 'Corporate Identity Director',
};

const articleById = {
  5467: {
    author: 'Robb Farrell',
    content: 'ex molestias et. Harum placeat soluta officiis fuga.↵',
    id: '5467',
    published: false,
    tags: ['convergence', 'Run plum exploit'],
    title: 'Corporate Identity Director',
  },
};

const articles = [{
  author: 'Robb Farrell',
  content: 'equi reprehenderit.Magnam delectus totam ab necessitatibus ex molestias et. Harum placeat soluta officiis fuga',
  id: '34234',
}, {
  author: 'Robb Farrell',
  content: 'equi reprehenderit.Magnam delectus totam ab necessitatibus ex molestias et. Harum placeat soluta officiis fuga',
  id: '12334',
}, {
  author: 'Angelina',
  content: 'equi reprehenderit.Magnam delectus totam ab necessitatibus ex molestias et. Harum placeat soluta officiis fuga',
  id: '5454',
}];

const articlesById = {
  articleDetailsById: {},
  articlesById: {
    34234: {
      author: 'Robb Farrell',
      content: 'equi reprehenderit.Magnam delectus totam ab necessitatibus ex molestias et. Harum placeat soluta officiis fuga',
      id: '34234',
    },
    12334: {
      author: 'Robb Farrell',
      content: 'equi reprehenderit.Magnam delectus totam ab necessitatibus ex molestias et. Harum placeat soluta officiis fuga',
      id: '12334',
    },
    5454: {
      author: 'Angelina',
      content: 'equi reprehenderit.Magnam delectus totam ab necessitatibus ex molestias et. Harum placeat soluta officiis fuga',
      id: '5454',
    },
  },
};

describe('articles reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should add articles to articlesById', () => {
    expect(reducer(initialState, {
      type: FETCH_ARTICLES,
      payload: articles,
    })).toEqual(articlesById);
  });

  it('should add article to articleDetailsById', () => {
    expect(reducer(initialState, {
      type: FETCH_ARTICLE,
      payload: [article],
    })).toEqual({
      articleDetailsById: articleById,
      articlesById: articleById,
    });
  });

  it('should create an article', () => {
    expect(reducer(initialState, {
      type: CREATE_ARTICLE,
      payload: article,
    })).toEqual({
      articleDetailsById: {},
      articlesById: articleById,
    });
  });

  it('should update an article', () => {
    expect(reducer({
      articleDetailsById: articleById,
      articlesById: articleById,
    }, {
      type: UPDATE_ARTICLE,
      payload: {
          author: 'Robb Stark',
          content: 'ex molestias et. Harum placeat soluta officiis fuga.↵',
          id: '5467',
          published: true,
          tags: ['convergence', 'Run plum exploit'],
          title: 'Corporate Identity Director',
        },
    })).toEqual({
        articleDetailsById: {
          5467: {
            author: 'Robb Stark',
            content: 'ex molestias et. Harum placeat soluta officiis fuga.↵',
            id: '5467',
            published: true,
            tags: ['convergence', 'Run plum exploit'],
            title: 'Corporate Identity Director',
          },
        },
        articlesById: {
          5467: {
            author: 'Robb Stark',
            content: 'ex molestias et. Harum placeat soluta officiis fuga.↵',
            id: '5467',
            published: true,
            tags: ['convergence', 'Run plum exploit'],
            title: 'Corporate Identity Director',
          },
        },
      });
  });
  it('should remove an article', () => {
    expect(reducer({
      articleDetailsById: {},
      articlesById: articleById,
    }, {
      type: REMOVE_ARTICLE,
      id: article.id,
    })).toEqual({
        articleDetailsById: {},
        articlesById: {},
      });
  });
});
