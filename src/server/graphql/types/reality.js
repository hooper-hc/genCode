import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

import { Meta } from './subdocuments';

export default new GraphQLObjectType({
  name: 'Reality',
  fields: {
    _id: {
      type: GraphQLID,
    },
    meta: {
      type: Meta,
    },
    typeP:{
      type: GraphQLBoolean,
    },
    typeL:{
      type: GraphQLBoolean,
    },
    typeT:{
      type: GraphQLBoolean,
    },
    hypernode: {
      type: GraphQLID,
    },
    nodeType: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    language: {
      type: GraphQLString,
    },
    temporal: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    geotags: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
  }
});
