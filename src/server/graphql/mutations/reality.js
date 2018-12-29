import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import realityInputType from '../types/reality-input';
import realityType from '../types/reality';
import getProjection from '../get-projection';
import RealityModel from '../../models/reality';
import HypernodeModel from '../../models/hypernode';

export default {
  createReality: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(realityInputType)
      }
    },
    async resolve(root, params, context, options) {
      if (!params.data.hypernode) {
        const hypernodeModel = new HypernodeModel();
        const newHypernode = await hypernodeModel.save();
        params.data.hypernode = newHypernode._id;
      }
      const realityModel = new RealityModel(params.data);
      const newReality = await realityModel.save();

      if (!newReality) {
        throw new Error('Error adding new reality');
      }
      return true;
    }
  },
  editReality: {
    type: GraphQLBoolean,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID),
      },
      data: {
        name: 'data',
        type: new GraphQLNonNull(realityInputType),
      },
    },
    async resolve(root, params, context, options) {
      return RealityModel.update({ _id: params.id }, params.data)
        .exec();
    }
  },
  deleteReality: {
    type: realityType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      const deletedReality = await RealityModel
        .findByIdAndRemove(params._id, {
          select: projection
        })
        .exec();

      if (!deletedReality) {
        throw new Error('Error deleting reality');
      }

      return deletedReality;
    }
  },
};
