export const ARTICLES_QUERY = `{
  articles {
    author
    content
    id
  }
}`;

export const ARTICLE_QUERY = id => `{
  articles(id: "${id}") {
    author
    content
    published
    id
    tags
    title
  }
}`;
