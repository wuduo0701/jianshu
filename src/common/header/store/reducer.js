import * as actionsTypes from './actionTypes';
//  引入immutable库，保证state的数据是不可改变的
//  只能设置一个全新的对象， 作为reducer的返回
import { fromJS } from 'immutable';

const defaultState = fromJS({ 
  focused : false
});

export default (state = defaultState, action) => {
  if(action.type === actionsTypes.SEARCH_FOCUS){
    return state.set('focused', true)
  }
  if(action.type === actionsTypes.SEARCH_BLUR){
    return state.set('focused', false)
  }
  return state;
}