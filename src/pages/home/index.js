import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight} from './style';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {actionCreators} from './store/index'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
})
export default connect(null, mapDispatch)(Home);