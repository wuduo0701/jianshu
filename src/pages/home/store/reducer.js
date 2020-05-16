import { fromJS } from 'immutable';
import * as actionsTypes from './actionTypes';
const defaultState = fromJS({
  articleList:[],
  recommendList: [],
  writer: [],
  acticlePage: 1,
  isTop: false
})

export default(state = defaultState, action) => {
  switch(action.type) {
    case actionsTypes.CHANGE_HOME_DATA:
      return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writer: fromJS(action.writer)
      })
    case actionsTypes.Add_MORE_INFO:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        acticlePage: action.nextPage
      })
    case actionsTypes.IS_TOP_SHOW:
      return state.set('isTop', action.show)
    default:
      return state;
  }
}