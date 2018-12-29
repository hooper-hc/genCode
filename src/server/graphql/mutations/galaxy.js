import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import galaxyInputType from '../types/galaxy-input';
import galaxyType from '../types/galaxy';
import getProjection from '../get-projection';
import GalaxyModel from '../../models/galaxy';

export default {
  createGalaxy: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(galaxyInputType)
      }
    },
    async resolve(root, params, context, options) {
      const galaxyModel = new GalaxyModel(params.data);
      const newGalaxy = await galaxyModel.save();

      if (!newGalaxy) {
        throw new Error('Error creating new galaxy');
      }
      return true;
    }
  },
  editGalaxy: {
    type: GraphQLBoolean,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID),
      },
      data: {
        name: 'data',
        type: new GraphQLNonNull(galaxyInputType),
      },
    },
    async resolve(root, params, context, options) {
      return GalaxyModel.update({ _id: params.id }, params.data)
        .exec();
    }
  },
  deleteGalaxy: {
    type: galaxyType,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const deletedGalaxy = await GalaxyModel
        .findByIdAndRemove(params.id)
        .exec();

      if (!deletedGalaxy) {
        throw new Error('Error deleting galaxy');
      }

      return deletedGalaxy;
    }
  },
};
