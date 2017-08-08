

import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
} from 'graphql';
import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents an Article',
  fields: {
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLID,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  },
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: {
    articles: {
      type: new GraphQLList(articleType),
      resolve: () => db.Article.find(),
    },
    article: {
      type: new GraphQLList(articleType),
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, args) => db.Article.find({ _id: args.id }),
    },
  },
});

const articleInputType = new GraphQLInputObjectType({
  name: 'articleInput',
  fields: {
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLID,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  },
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root Mutation type.',
  fields: {
    createArticle: {
      type: articleType,
      args: {
        article: {
          type: articleInputType,
        },
      },
      resolve: (_, { article }) => db.Article.create(article, (err, result) => {
        if (err) { console.error(err); }
        return result;
      }),
    },
    updateArticle: {
      type: articleType,
      args: {
        article: {
          type: articleInputType,
        },
      },
      resolve: (_, { article }) => db.Article.findByIdAndUpdate(article.id, article, { new: true }),
    },
    removeArticle: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (_, { id }) => db.Article.findByIdAndRemove(id),
    },
  },
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: MutationType,
});

export default Schema;
