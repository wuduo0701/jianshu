import * as actionsTypes from './actionTypes';
//  引入immutable库，保证state的数据是不可改变的
//  只能设置一个全新的对象， 作为reducer的返回
import { fromJS } from 'immutable';

const defaultState = fromJS({ 
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch(action.type){
    case actionsTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionsTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionsTypes.CHANGE_LIST:
      return state.merge({
        'list': action.data,
        'totalPage': action.totalPage
      })
    case actionsTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionsTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionsTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state
  }
}