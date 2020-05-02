import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store/index';

// 整合各个组件的reducer
export default combineReducers({
  header: headerReducer
})