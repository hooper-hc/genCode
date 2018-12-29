import * as actions from '../actions';
import _ from 'lodash';

export default function constellations(state = {
    items: {
        byId: {},
        allIds: [],
    },
    constellation: {},
    fetching: false,
    editing: false,
}, action) {
    switch (action.type) {
        case actions.FETCH_ALL_CONSTELLATIONS.REQUEST:
            return { ...state, fetching: true };
        case actions.FETCH_ALL_CONSTELLATIONS.SUCCESS:
            const items = { byId: {}, allIds: [] };
            _.forEach(action.response.data.allConstellations, (item) => {
                items.byId[item._id] = item;
                items.allIds.push(item._id);
            });
            return { ...state, items, fetching: false };
        case actions.FETCH_ALL_CONSTELLATIONS.FAILURE:
            return { ...state, fetching: false };
        case actions.FETCH_SINGLE_CONSTELLATION.REQUEST:
            return { ...state, fetching: true };
        case actions.FETCH_SINGLE_CONSTELLATION.SUCCESS:
            return { ...state, constellation: action.response.data.constellationById, fetching: false };
        case actions.FETCH_SINGLE_CONSTELLATION.FAILURE:
            return { ...state, fetching: false };
        case actions.CREATE_CONSTELLATION.REQUEST:
            return { ...state, editing: true };
        case actions.CREATE_CONSTELLATION.SUCCESS:
            return { ...state, editing: false };
        case actions.CREATE_CONSTELLATION.FAILURE:
            return { ...state, editing: false };
        case actions.EDIT_CONSTELLATION.REQUEST:
            return { ...state, editing: true };
        case actions.EDIT_CONSTELLATION.SUCCESS:
            return { ...state, editing: false };
        case actions.EDIT_CONSTELLATION.FAILURE:
            return { ...state, editing: false };
        case actions.DELETE_CONSTELLATION.REQUEST:
            return { ...state, editing: true };
        case actions.DELETE_CONSTELLATION.SUCCESS:
            return { ...state, editing: false };
        case actions.DELETE_CONSTELLATION.FAILURE:
            return { ...state, editing: false };
        default:
            return state;
    }
}
