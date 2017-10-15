import {createStore, applyMiddleware} from 'redux';
import reducer from '../Reducers/index.js'

const store=createStore(reducer);

export default store;
