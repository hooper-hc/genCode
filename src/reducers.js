import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import constellations from './constellations/reducers';
// import graph from './constellations/graph/reducers';
import core from './core/reducers';
import galaxies from './galaxies/reducers';
import universe from './universe/reducers';
// import metaverse from './metaverse/reducers';
import userprofiles from './userprofiles/reducers';

const appReducer = combineReducers({
  constellations,
  // graph,
  core,
  galaxies,
  universe,
  // metaverse,
  userprofiles,
  form: formReducer,
});

const rootReducer = (state, action) => {
  // space for extra steps
  return appReducer(state, action);
};

export default rootReducer;
