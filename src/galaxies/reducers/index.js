import * as actions from '../actions';
import _ from 'lodash';

export default function galaxies(state = {
    items: {
        byId: {},
        allIds: [],
    },
    galaxy: {},
    fetching: false,
    editing: false,
}, action) {
    switch (action.type) {
        case actions.FETCH_ALL_GALAXIES.REQUEST:
            return { ...state, fetching: true };
        case actions.FETCH_ALL_GALAXIES.SUCCESS:
            const items = { byId: {}, allIds: [] };
            _.forEach(action.response.data, (item) => {
                items.byId[item._id] = item;
                items.allIds.push(item._id);
            });
            return { ...state, items, fetching: false };
        case actions.FETCH_ALL_GALAXIES.FAILURE:
            return { ...state, fetching: false };
        case actions.FETCH_SINGLE_GALAXY.REQUEST:
            return { ...state, fetching: true };
        case actions.FETCH_SINGLE_GALAXY.SUCCESS:
            return { ...state, galaxy: action.response.data, fetching: false };
        case actions.FETCH_SINGLE_GALAXY.FAILURE:
            return { ...state, fetching: false };
        case actions.CREATE_GALAXY.REQUEST:
            return { ...state, editing: true };
        case actions.CREATE_GALAXY.SUCCESS:
            return { ...state, editing: false };
        case actions.CREATE_GALAXY.FAILURE:
            return { ...state, editing: false };
        case actions.EDIT_GALAXY.REQUEST:
            return { ...state, editing: true };
        case actions.EDIT_GALAXY.SUCCESS:
            return { ...state, editing: false };
        case actions.EDIT_GALAXY.FAILURE:
            return { ...state, editing: false };
        case actions.DELETE_GALAXY.REQUEST:
            return { ...state, editing: true };
        case actions.DELETE_GALAXY.SUCCESS:
            return { ...state, editing: false };
        case actions.DELETE_GALAXY.FAILURE:
            return { ...state, editing: false };
        default:
            return state;
    }
}
