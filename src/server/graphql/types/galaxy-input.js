import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

import { RelationInput, MetaInput } from './subdocuments';

export default new GraphQLInputObjectType({
  name: 'GalaxyInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    meta: {
      type: MetaInput,
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
    constellations: {
      type: new GraphQLList(RelationInput),
    },
  }
});
