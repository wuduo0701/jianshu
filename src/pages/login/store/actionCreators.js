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
        const result = res.data.data;
        if(result) {
          dispatch(changeLogin(result));
          alert('登入成功')
        }else {
          alert('登录失败')
        }
      })
  }
}

