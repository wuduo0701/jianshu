import axios from 'axios';
import * as actionsTypes from './actionTypes';
import { fromJS} from 'immutable';

const changeHomeData = (result) => ({
  type: actionsTypes.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList
})

const addMoreInfo = (list, nextPage) => ({
  type: actionsTypes.Add_MORE_INFO,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
    .then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    })
  }
}

export const getMoreInfo = (page) => {
  return (dispatch) => {
    axios.get('/api/homeListMore.json?page' + page)
    .then((res) => {
      const result = res.data.MoreList;
      dispatch(addMoreInfo(result, page+1))
    })
  }
}

export const TopShow = (show) => ({
  type: actionsTypes.IS_TOP_SHOW,
  show
})