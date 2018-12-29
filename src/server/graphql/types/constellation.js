import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';

import { Relation, Edge, Meta } from './subdocuments';

import Reality from './reality';

export default new GraphQLObjectType({
  name: 'Constellation',
  fields: {
    _id: {
      type: GraphQLID,
    },
    meta: {
      type: Meta,
    },
    editors: {
      type: new GraphQLList(GraphQLID),
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
    nodes: {
      type: new GraphQLList(Reality),
    },
    edges: {
      type: new GraphQLList(Edge),
    },
    trustRequired: {
      type: GraphQLInt,
    },
  },
});
