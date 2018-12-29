import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import { Types } from 'mongoose';

import galaxyType from '../types/galaxy';
import getProjection from '../get-projection';
import GalaxyModel from '../../models/galaxy';

export default {
  galaxyById: {
    type: galaxyType,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return GalaxyModel
        .findById(params.id)
        .select(projection)
        .exec();
    }
  },
  allGalaxies: {
    type: new GraphQLList(galaxyType),
    args: {},
    resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return GalaxyModel
        .find()
        .select(projection)
        .exec();
    }
  },
  // userGalaxies: {
  //   type: new GraphQLList(galaxyType),
  //   args: {
  //     user: {
  //       name: 'user',
  //       type: new GraphQLNonNull(GraphQLID),
  //     },
  //   },
  //   resolve(root, params, context, options) {
  //     const projection = getProjection(options.fieldNodes[0]);
  //     return GalaxyModel
  //       .find()
  //       .select(projection)
  //       .exec();
  //   }
  // }
};
