import { createStore, compose } from 'redux';
import reducer from './reducer';
//增加redux调试扩展包
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

export default store;