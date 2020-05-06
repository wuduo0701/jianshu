import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BackTop} from './style';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {actionCreators} from './store/index'

class Home extends PureComponent {
  ScrollTop() {
    window.scroll(0, 0);
  }
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
        {this.props.isTop ? <BackTop onClick={this.ScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeIsTop);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeIsTop);
  }
}
const mapState = (state) => ({
  isTop: state.getIn(['home', 'isTop'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeIsTop(e){
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.TopShow(true))
    }else {
      dispatch(actionCreators.TopShow(false))
    }
  }
})
export default connect(mapState, mapDispatch)(Home);