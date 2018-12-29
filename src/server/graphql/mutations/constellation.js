import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import constellationInputType from '../types/constellation-input';
import constellationType from '../types/constellation';
import getProjection from '../get-projection';
import ConstellationModel from '../../models/constellation';

export default {
  createConstellation: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(constellationInputType)
      }
    },
    async resolve(root, params, context, options) {
      const constellationModel = new ConstellationModel(params.data);
      const newConstellation = await constellationModel.save();

      if (!newConstellation) {
        throw new Error('Error creating new constellation');
      }
      return true;
    }
  },
  editConstellation: {
    type: GraphQLBoolean,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID),
      },
      data: {
        name: 'data',
        type: new GraphQLNonNull(constellationInputType),
      },
    },
    async resolve(root, params, context, options) {
      return ConstellationModel.update({ _id: params.id }, params.data)
        .exec();
    }
  },
  deleteConstellation: {
    type: constellationType,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const deletedConstellation = await ConstellationModel
        .findByIdAndRemove(params.id)
        .exec();

      if (!deletedConstellation) {
        throw new Error('Error deleting constellation');
      }

      return deletedConstellation;
    }
  },
};
