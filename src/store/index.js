import { createStore, compose, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';    //配置中间件
import reducer from './reducer';
//增加redux调试扩展包
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;