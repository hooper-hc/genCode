import { createRequestTypes, actionCreators, action } from '../../actionCreators';

export const FETCH_HYPERNODE = createRequestTypes('FETCH_HYPERNODE');
export const fetchHypernode = actionCreators(FETCH_HYPERNODE);

export const FETCH_ALL_REALITIES = createRequestTypes('FETCH_ALL_REALITIES');
export const fetchAllRealities = actionCreators(FETCH_ALL_REALITIES);

export const LIST_HYPERNODE_CONSTELLATIONS = createRequestTypes('LIST_HYPERNODE_CONSTELLATIONS');
export const listHypernodeConstellations = actionCreators(LIST_HYPERNODE_CONSTELLATIONS);

export const CREATE_REALITY = createRequestTypes('CREATE_REALITY');
export const createReality = actionCreators(CREATE_REALITY);

export const EDIT_REALITY = createRequestTypes('EDIT_REALITY');
export const editReality = actionCreators(EDIT_REALITY);

export const DELETE_REALITY = createRequestTypes('DELETE_REALITY');
export const deleteReality = actionCreators(DELETE_REALITY);

export const ATTACH_REALITIES = createRequestTypes('ATTACH_REALITIES');
export const attachRealities = actionCreators(ATTACH_REALITIES);

export const SELECT_REALITY = 'SELECT_REALITY';
export const selectReality = id => action(SELECT_REALITY, { id });
