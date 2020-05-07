import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes.js';
const defaultState = fromJS({
  isLogin: false,
})

export default(state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('isLogin', action.value);
    case actionTypes.CHANGE_LOGOUT:
      return state.set('isLogin', action.value);
    default:
      return state;
  }
}