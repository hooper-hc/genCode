import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

import { Relation, Meta } from './subdocuments';

export default new GraphQLObjectType({
  name: 'Galaxy',
  fields: {
    _id: {
      type: GraphQLID,
    },
    meta: {
      type: Meta,
    },
    name: {
      type: GraphQLString,
    },
    avatar: {
      type: GraphQLString,
    },
    trees: {
      type: new GraphQLList(Relation),
    },
    trustedBy: {
      type: new GraphQLList(Relation),
    },
    theme: {
      type: Relation,
    },
    constellations: {
      type: new GraphQLList(Relation),
    },
  }
});
