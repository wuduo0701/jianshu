import * as actionsTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';
import { actionTypes } from '.';

const change_List = (data) => ({
  type: actionsTypes.CHANGE_LIST,
  data: fromJS(data),    //data转化为immutable类型的数组
  totalPage: Math.ceil(data.length / 10)  //换一换的页数
})

export const searchFocus = () => ({
  type: actionsTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionsTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: actionsTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionsTypes.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})

export const getInfo = () => {
  return (dispatch) => {
    axios.get('api/headerInfo.json')
      .then((res) => {
        dispatch(change_List(res.data.data));
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
