import { delay } from 'redux-saga';
import { call, select, put, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';

import actions from './actions';
import postQuery from './api';

console.log('Sagas', actions);

const apiMap = [
  'fetchUsers',
  // 'userLogin',
  // 'userLogout',
  'createUser',
  'editUser',
  'deleteUser',
  // 'addTrust',
  // 'removeTrust',
  // 'addWatch',
  // 'removeWatch',
  // 'addSupport',
  // 'removeSupport',
  // 'setTrustDegrees',
  // 'fetchSingleConstellation',
  // 'fetchUserConstellations',
  // 'createConstellation',
  // 'editConstellation',
  // 'deleteConstellation',
  // 'listJournalists',
  // 'listPublications',
  // 'listNodes',
  // 'listTrees',
  // 'addTree',
  // 'removeTree',
  // 'addEditor',
  // 'removeEditor',
  // 'removeEditorContent',
  'fetchSingleGalaxy',
  'fetchAllGalaxies',
  // 'fetchUserGalaxies',
  'createGalaxy',
  'editGalaxy',
  'deleteGalaxy',
  'fetchSingleConstellation',
  'fetchAllConstellations',
  // 'fetchUserConstellations,'
  'createConstellation',
  'editConstellation',
  'deleteConstellation',
  // 'editFlter',
  'fetchHypernode',
  'fetchAllRealities',
  // 'listHypernodeConstellations',
  'createReality',
  'editReality',
  'deleteReality',
  // 'attachRealities',
  // 'createTree',
  // 'editTree',
  // 'deleteTree',
  // 'listTreeConstellations',
];

function* fetchEntitySaga(entity, action) {
  const { response } = yield call(postQuery, action);
  console.log('saga response', response);
  console.log('saga entity', entity);
  if (!response.errors || !response.errors.length) {
    yield put(entity.success(response));
  } else {
    yield put(entity.failure({ error: response.errors[0] }));
  }
}

function fetchEntity(entity) {
  return fetchEntitySaga.bind(null, entity);
}

export function* takeLatestRequest(entity) {
  yield takeLatest(entity.types.REQUEST, fetchEntity(entity));
}

export default function* fetchers() {
  yield _.map(apiMap, fetcher => takeLatestRequest(actions[fetcher]));
}
