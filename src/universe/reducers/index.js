import * as actions from '../actions';
import _ from 'lodash';

export default function universe(state = {
    items: {
        byId: {},
        allIds: [],
    },
    reality: {},
    fetching: false,
    editing: false,
}, action) {
    switch (action.type) {
        case actions.FETCH_ALL_REALITIES.REQUEST:
            return { ...state, fetching: true };
        case actions.FETCH_ALL_REALITIES.SUCCESS:
            const allRealities = { byId: {}, allIds: [] };
            _.forEach(action.response.data.allRealities, (item) => {
                allRealities.byId[item._id] = item;
                allRealities.allIds.push(item._id);
            });
            return { ...state, items: allRealities, fetching: false };
        case actions.FETCH_ALL_REALITIES.FAILURE:
            return { ...state, fetching: false };
        case actions.FETCH_HYPERNODE.REQUEST:
            return { ...state, fetching: true };
        case actions.FETCH_HYPERNODE.SUCCESS:
            const realities = _.cloneDeep(state.realities);
            _.forEach(action.response.data.realitiesInHypernode, (node) => {
                if (!realities.byId[node._id]) {
                    realities.byId[node._id] = node;
                    realities.allIds.push(node._id);
                }
            });
            return { ...state, items: realities, fetching: false };
        case actions.FETCH_HYPERNODE.FAILURE:
            return { ...state, fetching: false };
        case actions.CREATE_REALITY.REQUEST:
            return { ...state, editing: true };
        case actions.CREATE_REALITY.SUCCESS:
            return { ...state, editing: false };
        case actions.CREATE_REALITY.FAILURE:
            return { ...state, editing: false };
        case actions.EDIT_REALITY.REQUEST:
            return { ...state, editing: true };
        case actions.EDIT_REALITY.SUCCESS:
            return { ...state, editing: false };
        case actions.EDIT_REALITY.FAILURE:
            return { ...state, editing: false };
        case actions.DELETE_REALITY.REQUEST:
            return { ...state, editing: true };
        case actions.DELETE_REALITY.SUCCESS:
            return { ...state, editing: false };
        case actions.DELETE_REALITY.FAILURE:
            return { ...state, editing: false };
        case actions.SELECT_REALITY:
            if (action.id) {
                return { ...state, reality: state.items.byId[action.id] };
            }
            return { ...state, reality: {} };
        default:
            return state;
    }
}
