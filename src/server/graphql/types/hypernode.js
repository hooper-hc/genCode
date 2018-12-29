import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLID
} from 'graphql';

import Reality from './reality';

export default new GraphQLObjectType({
  name: 'Hypernode',
  fields: {
    _id: {
      type: GraphQLID,
    },
    realities: {
      type: new GraphQLList(Reality),
    },
  }
});
