export const ARTICLES_QUERY = `{
  articles {
    author
    content
    id
  }
}`;

export const ARTICLE_QUERY = id => `{
  article(id: "${id}") {
    author
    content
    id
    published
    tags
    title
  }
}`;

export const CREATE_ARTICLE = ({ author, title, content, published, tags = [] }) => `mutation create {
  createArticle(article: {
      author: "${author}",
      content: "${content}",
      published: ${published},
      title:"${title}",
      tags:[${tags.map(tag => `"${tag}"`)}]
    }) {
    author
    content
    id
    published
    tags
    title
  }
}`;


export const UPDATE_ARTICLE = ({ id, author, title, content, published, tags }) => `mutation update {
  updateArticle(article: {
      id: "${id}",
      author: "${author}", 
      content: "${encodeURIComponent(content)}", 
      published: ${published}, 
      tags:[${tags.map(tag => `"${tag}"`)}],
      title:"${title}"
    }) {
      id
      author
      content
      published
      tags
      title
  }
} `;

export const REMOVE_ARTICLE = id => `mutation remove {
  removeArticle(
      id: "${id}"
    ) {
    id
  }
}`;
