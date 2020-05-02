import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import { Top, Logo, Menu, MenuItem, MenuSearch, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, Addition, Button } from './style';

const showInfo = (show) => {
  if(show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <div>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </div>
      </SearchInfo>
    )
  }else{
    return null;
  }
}

function Header(props) {
  return (
    <Top>
      <Logo/>
      <Menu>
        <MenuItem className="left active">首页</MenuItem>
        <MenuItem className="left">下载App</MenuItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={300}
            classNames='slide'
          >
            <MenuSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</i>
          {showInfo(props.focused)}
        </SearchWrapper>
        <MenuItem className="right">登入</MenuItem>
        <MenuItem className="right">
          <i className="iconfont">&#xe636;</i>
        </MenuItem>
      </Menu>
      <Addition>
        <Button className="write">
          <i className="iconfont">&#xe96c;</i>
          <span>&nbsp;</span>
          写文章
        </Button>
        <Button className="register">注册</Button>
      </Addition>
    </Top>
  )
}
// 映射state数据到props上
const mapStateToprops = (state) => {
  return {
    // 返回header下面的focused对象
    focused: state.getIn(['header', 'focused'])
  }
}
// 映射dispatch方法到props上
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}
export default connect(mapStateToprops, mapDispatchToProps)(Header);