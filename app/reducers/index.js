/*
 * @file reducers for reducers
 */
/* beautify ignore:start */
import { combineReducers } from 'redux';
import items from './items';
import editor from './editor';
/* beautify ignore:end */

const rootReducer = combineReducers({
    items,
    editor
});

export default rootReducer;
