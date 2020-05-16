import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
})
export const logout = () => ({
  type: actionTypes.CHANGE_LOGOUT,
  value: false
})
export const login = (accout, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + accout + '&password=' + password)
      .then((res) => {
        const result = res.data;
        //登入鉴权，判断是否登入，账号密码是否正确
        if(result.data && accout.value === result.accout && password.value === result.password) {
          dispatch(changeLogin(result.data));
          alert('登入成功啦😝');
        }else {
          alert('账号或者密码错误😱');
        }
      })
  }
}

