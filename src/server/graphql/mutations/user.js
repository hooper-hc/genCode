import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import userInputType from '../types/user-input';
import userType from '../types/user';
import getProjection from '../get-projection';
import UserModel from '../../models/user';

export default {
  createUser: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(userInputType)
      }
    },
    async resolve(root, params, context, options) {
      console.log('BARG BARG!');
      const userModel = new UserModel(params.data);
      const newUser = await userModel.save();

      if (!newUser) {
        throw new Error('Error creating new user');
      }
      return true;
    }
  },
  editUser: {
    type: GraphQLBoolean,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID),
      },
      data: {
        name: 'data',
        type: new GraphQLNonNull(userInputType),
      },
    },
    async resolve(root, params, context, options) {
      return UserModel.update({ _id: params.id }, params.data)
        .exec();
    }
  },
  deleteUser: {
    type: userType,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const deletedUser = await UserModel
        .findByIdAndRemove(params.id)
        .exec();

      if (!deletedUser) {
        throw new Error('Error deleting user');
      }

      return deletedUser;
    }
  },
};
