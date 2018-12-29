import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import { Types } from 'mongoose';
import _ from 'lodash';

import constellationType from '../types/constellation';
import getProjection from '../get-projection';
import ConstellationModel from '../../models/constellation';
import RealityModel from '../../models/reality';

export default {
  constellationById: {
    type: constellationType,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID),
      }
    },
    resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      var constellation = {};
      return ConstellationModel
        .findById(params.id)
        .select(projection)
        .exec()
        .then((foundConstellation) => {
          constellation = foundConstellation.toObject();
          return RealityModel.find({ _id: { $in: constellation.nodes }})
          .exec();
        }).then((nodes) => {
          constellation.nodes = nodes;
          console.log('Constellation: ', JSON.stringify(constellation));
          console.log('ID', constellation._id);
          // console.log('Node 1 id from constellation: ', constellation.nodes[0]._id);
          // console.log('Node 1 id from node: ', nodes[0]._id);
          return constellation;
        });
    }
  },
  userConstellations: {
    type: constellationType,
    args: {
      user: {
        name: 'user',
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return ConstellationModel
        .find({ editors: params.user })
        .select(projection)
        .exec();
    },
  },
  constellationsInList: {
    type: constellationType,
    args: {
      constellationIDs: {
        name: 'constellationIDs',
        type: new GraphQLList(GraphQLID)
      },
    },
    resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return ConstellationModel
        .find({
          _id: {
            $in: params.constellationIDs,
          }
        })
        .select(projection)
        .exec();
    },
  },
  allConstellations: {
    type: new GraphQLList(constellationType),
    args: {},
    resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return ConstellationModel
        .find()
        .lean()
        .select(projection)
        .exec()
        .then(foundConstellations => _.map(foundConstellations, (foundConstellation) => {
            const constellation = _.cloneDeep(foundConstellation);
            console.log('pre: ',JSON.stringify(foundConstellation));
            constellation.nodes = _.map(foundConstellation.nodes, node => ({
              _id: node,
            }));
            console.log('post: ',JSON.stringify(constellation));
          return constellation;
        }));
    }
  }
};
