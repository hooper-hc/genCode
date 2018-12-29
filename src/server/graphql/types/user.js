import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

import { Meta } from './subdocuments';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {
      type: GraphQLID,
    },
    meta: {
      type: Meta,
    },
    handle: {
      type: GraphQLString,
    },
    auth0id: {
      type: GraphQLString,
    },
    bio: {
      type: GraphQLString,
    },
    avatar: {
      type: GraphQLString,
    },
    public: {
      type: GraphQLBoolean,
    },
    donate: {
      type: GraphQLString,
    },
  }
});
