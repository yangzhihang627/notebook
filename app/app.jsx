/*
 * @file app main file
 */

import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators, createStore, applyMiddleware, compose } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import Deskmark from './components/Deskmark';
import rootReducer from './reducers';
import * as actionCreators from './actions';

const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f));

const App = connect(state => ({ state }), dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
}))(Deskmark);

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Provider store={store}><App /></Provider>, app);
