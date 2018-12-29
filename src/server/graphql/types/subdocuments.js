import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const Relation = new GraphQLObjectType({
  name: 'Relation',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  },
});

export const RelationInput = new GraphQLInputObjectType({
  name: 'RelationInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLID,
    },
  },
});

export const Meta = new GraphQLObjectType({
  name: 'Meta',
  fields: {
    createdBy: {
      type: Relation,
    },
    createdOn: {
      type: GraphQLDate,
    }
  },
});

export const MetaInput = new GraphQLInputObjectType({
  name: 'MetaInput',
  fields: {
    createdBy: {
      type: RelationInput,
    },
    createdOn: {
      type: GraphQLDate,
    }
  },
});

export const Edge = new GraphQLObjectType({
  name: 'Edge',
  fields: {
    fromId: {
      type: GraphQLID,
    },
    toId: {
      type: GraphQLID,
    },
    description: {
      type: GraphQLString,
    },
    documentation: {
      type: new GraphQLList(GraphQLString),
    },
  },
});

export const EdgeInput = new GraphQLInputObjectType({
  name: 'EdgeInput',
  fields: {
    fromId: {
      type: GraphQLID,
    },
    toId: {
      type: GraphQLID,
    },
    description: {
      type: GraphQLString,
    },
    documentation: {
      type: new GraphQLList(GraphQLString),
    },
  },
});
