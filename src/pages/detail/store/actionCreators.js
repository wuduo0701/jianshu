import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeDetail = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  content
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id)
      .then((res) => {
        const result = res.data.data;
        const content = result.filter(item => {
          return id === item.id
        })
        dispatch(changeDetail(content[0].title, content[0].content));
      })
      .catch((err) => {
        console.log(err)
      })
  }
};
