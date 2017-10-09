/*
 * @file reducers for editor
 */
/* beautify ignore:start */
import * as ActionTypes from '../actions';
/* beautify ignore:end */

const initialState = {
    selectId: null,
    editing: false
};

export default function editor(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SELECT_ENTRY:
            return Object.assign({}, state, {
                selectId: action.id,
                editing: false
            });
        case ActionTypes.CREATE_NEW_ENTRY:
            return Object.assign({}, state, {
                selectId: null,
                editing: true
            });
        case ActionTypes.EDIT_ENTRY:
            return Object.assign({}, state, {
                selectId: action.id,
                editing: true
            });
        case ActionTypes.CANCEL_EDIT:
            return Object.assign({}, state, {
                editing: false
            });
        case ActionTypes.UPDATE_SAVED_ENTRY:
            return Object.assign({}, state, {
                selectId: action.id,
                editing: false
            });
        default:
            return state;
    }
}
