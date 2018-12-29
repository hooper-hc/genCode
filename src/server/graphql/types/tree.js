import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID
} from 'graphql';

import { Relation, Meta } from './subdocuments';

export default new GraphQLObjectType({
  name: 'Tree',
  fields: {
    _id: {
      type: GraphQLID,
    },
    meta: {
      type: Meta,
    },
    constellations: {
      type: new GraphQLList(Relation),
    },
    category: {
      type: new GraphQLList(GraphQLString),
    },
  }
});
