import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID
} from 'graphql';

import { RelationInput, MetaInput } from './subdocuments';

export default new GraphQLInputObjectType({
  name: 'TreeInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    meta: {
      type: MetaInput,
    },
    constellations: {
      type: new GraphQLList(RelationInput),
    },
    category: {
      type: new GraphQLList(GraphQLString),
    },
  }
});
