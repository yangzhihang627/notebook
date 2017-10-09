/*
 * @file app main file
 */
/* beautify ignore:start */
import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import Deskmark from './components/Deskmark';
import rootReducer from './reducers';
import * as actionCreators from './actions';
/* beautify ignore:end */

const store = applyMiddleware(thunkMiddleware)(createStore)(rootReducer);

const App = connect(state => ({ state }), dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
}))(Deskmark);

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Provider store={store}><App /></Provider>, app);
