import React, { PureComponent} from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {LoginWrapper, LoginBox, Input, Title, Button} from './style'

class Login extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if(!isLogin) {
      return(
        <LoginWrapper>
          <LoginBox>
            <Title>登入界面</Title>
            <Input placeholder='账号' ref={(input) => {this.account = input}}/>
            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to='/'/>
    }

  }
}
const mapState = (state) => ({
  isLogin: state.getIn(['login', 'isLogin'])
})
const mapDispatch = (dispatch) => ({
  login(account, password) {
    dispatch(actionCreators.login(account, password))
  }
})
export default connect(mapState, mapDispatch)(Login);