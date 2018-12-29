import { createRequestTypes, actionCreators, action } from '../../actionCreators';

export const FETCH_SINGLE_GALAXY = createRequestTypes('FETCH_SINGLE_GALAXY');
export const fetchSingleGalaxy = actionCreators(FETCH_SINGLE_GALAXY);

export const FETCH_ALL_GALAXIES = createRequestTypes('FETCH_ALL_GALAXIES');
export const fetchAllGalaxies = actionCreators(FETCH_ALL_GALAXIES);

export const FETCH_USER_GALAXIES = createRequestTypes('FETCH_USER_GALAXIES');
export const fetchUserGalaxies = actionCreators(FETCH_USER_GALAXIES);

export const CREATE_GALAXY = createRequestTypes('CREATE_GALAXY');
export const createGalaxy = actionCreators(CREATE_GALAXY);

export const EDIT_GALAXY = createRequestTypes('EDIT_GALAXY');
export const editGalaxy = actionCreators(EDIT_GALAXY);

export const DELETE_GALAXY = createRequestTypes('DELETE_GALAXY');
export const deleteGalaxy = actionCreators(DELETE_GALAXY);

// export const LIST_CONSTELLATIONS = createRequestTypes('LIST_CONSTELLATIONS');
// export const listConstellations = actionCreators(LIST_CONSTELLATIONS);

export const ADD_CONSTELLATION = 'ADD_CONSTELLATION';
export const addConstellation = constellation => action(ADD_CONSTELLATION, constellation);

export const REMOVE_CONSTELLATION = 'REMOVE_CONSTELLATION';
export const removeConstellation = constellation => action(REMOVE_CONSTELLATION, constellation);

export const EDIT_FILTER = 'EDIT_FILTER';
export const editFlter = filter => action(EDIT_FILTER, { filter });

