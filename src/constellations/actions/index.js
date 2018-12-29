import { createRequestTypes, actionCreators, action } from '../../actionCreators';

export const FETCH_SINGLE_CONSTELLATION = createRequestTypes('FETCH_SINGLE_CONSTELLATION');
export const fetchSingleConstellation = actionCreators(FETCH_SINGLE_CONSTELLATION);

export const FETCH_ALL_CONSTELLATIONS = createRequestTypes('FETCH_ALL_CONSTELLATIONS');
export const fetchAllConstellations = actionCreators(FETCH_ALL_CONSTELLATIONS);

export const FETCH_USER_CONSTELLATIONS = createRequestTypes('FETCH_USER_CONSTELLATIONS');
export const fetchUserConstellations = actionCreators(FETCH_USER_CONSTELLATIONS);

export const CREATE_CONSTELLATION = createRequestTypes('CREATE_CONSTELLATION');
export const createConstellation = actionCreators(CREATE_CONSTELLATION);

export const EDIT_CONSTELLATION = createRequestTypes('EDIT_CONSTELLATION');
export const editConstellation = actionCreators(EDIT_CONSTELLATION);

export const DELETE_CONSTELLATION = createRequestTypes('DELETE_CONSTELLATION');
export const deleteConstellation = actionCreators(DELETE_CONSTELLATION);

// export const LIST_JOURNALISTS = createRequestTypes('LIST_JOURNALISTS');
// export const listJournalists = actionCreators(LIST_JOURNALISTS);

// export const LIST_PUBLICATIONS = createRequestTypes('LIST_PUBLICATIONS');
// export const listPublications = actionCreators(LIST_PUBLICATIONS);

// export const LIST_NODES = createRequestTypes('LIST_NODES');
// export const listNodes = actionCreators(LIST_NODES);

// export const LIST_TREES = createRequestTypes('LIST_TREES');
// export const listTrees = actionCreators(LIST_TREES);

export const ADD_TREE = 'ADD_TREE';
export const addTree = tree => action(ADD_TREE, tree);

export const REMOVE_TREE = 'REMOVE_TREE';
export const removeTree = tree => action(REMOVE_TREE, tree);

export const ADD_EDITOR = 'ADD_EDITOR';
export const addEditor = editor => action(ADD_EDITOR, editor);

export const REMOVE_EDITOR = 'REMOVE_EDITOR';
export const removeEditor = editor => action(REMOVE_EDITOR, editor);

export const REMOVE_EDITOR_CONTENT = 'REMOVE_EDITOR_CONTENT';
export const removeEditorContent = editor => action(REMOVE_EDITOR_CONTENT, editor);

export const ADD_NODE = 'ADD_NODE';
export const addNode = node => action(ADD_NODE, node);

export const EDIT_NODE = 'EDIT_NODE';
export const editNode = node => action(EDIT_NODE, node);

export const DELETE_NODE = 'DELETE_NODE';
export const deleteNode = node => action(DELETE_NODE, node);

export const ADD_EDGE = 'ADD_EDGE';
export const addEdge = edge => action(ADD_EDGE, edge);

export const EDIT_EDGE = 'EDIT_EDGE';
export const editEdge = edge => action(EDIT_EDGE, edge);

export const DELETE_EDGE = 'DELETE_EDGE';
export const deleteEdge = edge => action(DELETE_EDGE, edge);
