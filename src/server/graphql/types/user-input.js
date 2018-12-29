import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

import { MetaInput } from './subdocuments';

export default new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    meta: {
      type: MetaInput,
    },
    handle: {
      type: new GraphQLNonNull(GraphQLString),
    },
    auth0id: {
      type: new GraphQLNonNull(GraphQLString),
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
