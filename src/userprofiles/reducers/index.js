import * as actions from '../actions';
import _ from 'lodash';

export default function userprofiles(state = {
    items: {
        byId: {},
        allIds: [],
    },
    fetching: false,
    editing: false,
}, action) {
    switch (action.type) {
        case actions.FETCH_USERS.REQUEST:
            return { ...state, fetching: true };
        case actions.FETCH_USERS.SUCCESS:
            const items = { byId: {}, allIds: [] };
            _.forEach(action.response.data, (item) => {
                items.byId[item._id] = item;
                items.allIds.push(item._id);
            });
            return { ...state, items, fetching: false };
        case actions.FETCH_USERS.FAILURE:
            return { ...state, fetching: false };
        case actions.CREATE_USER.REQUEST:
            return { ...state, editing: true };
        case actions.CREATE_USER.SUCCESS:
            return { ...state, editing: false };
        case actions.CREATE_USER.FAILURE:
            return { ...state, editing: false };
        case actions.EDIT_USER.REQUEST:
            return { ...state, editing: true };
        case actions.EDIT_USER.SUCCESS:
            return { ...state, editing: false };
        case actions.EDIT_USER.FAILURE:
            return { ...state, editing: false };
        case actions.DELETE_USER.REQUEST:
            return { ...state, editing: true };
        case actions.DELETE_USER.SUCCESS:
            return { ...state, editing: false };
        case actions.DELETE_USER.FAILURE:
            return { ...state, editing: false };
        default:
            return state;
    }
}
