import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import { Types } from 'mongoose';

import hypernodeType from '../types/hypernode';
import getProjection from '../get-projection';
import HypernodeModel from '../../models/hypernode';
import RealityModel from '../../models/reality';

export default {
  hypernode: {
    type: hypernodeType,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve(root, params, context, options) {
      var hypernode = {};
      return HypernodeModel
        .findById(params.id)
        .exec()
        .then((foundHypernode) => {
          hypernode = foundHypernode.toObject();
          return RealityModel.find({ hypernode: hypernode._id })
          .exec();
        }).then((realities) => {
          hypernode.realities = realities;
          return hypernode;
        });
    }
  },
};
