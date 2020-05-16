import React, { PureComponent} from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class Write extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if(!isLogin) {
      alert('你还没登录哦😡')
      return <Redirect to='/login'/>
    }else{
      return(
        <div>写文章页面</div>
      )
    }
  }
}
const mapState = (state) => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

export default connect(mapState, null)(Write);