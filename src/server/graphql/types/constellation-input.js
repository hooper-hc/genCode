import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';

import { RelationInput, EdgeInput, MetaInput } from './subdocuments';

export default new GraphQLInputObjectType({
  name: 'ConstellationInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    meta: {
      type: MetaInput,
    },
    editors: {
      type: new GraphQLList(GraphQLID),
    },
    avatar: {
      type: GraphQLString,
    },
    trees: {
      type: new GraphQLList(RelationInput),
    },
    trustedBy: {
      type: new GraphQLList(RelationInput),
    },
    theme: {
      type: RelationInput,
    },
    nodes: {
      type: new GraphQLList(GraphQLID),
    },
    edges: {
      type: new GraphQLList(EdgeInput),
    },
    trustRequired: {
      type: GraphQLInt,
    },
  },
});
