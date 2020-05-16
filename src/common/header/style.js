import styled from 'styled-components';
import logopic from '../../assets/logo.png';

export const Top = styled.div`
  z-index: 1;
  position: relative;
  height: 56px;
  border-bottom:  1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logopic});
  background-size: contain;
`;

export const Menu = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`
export const MenuItem = styled.div`
  line-height: 56px;
  padding: 0  15px;
  font-size: 17px;
  color: #333333;
  &.left {
    float: left;
    cursor: pointer;
  }
  &.right {
    float: right;
    color: #969696;
    cursor: pointer;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const MenuSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 40px;
  background: #eee;
  font-size:  14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 300px;
  }
  /* 输入框过渡动画 */
  &.slide-enter {    
    transition: all .3s ease-out;
  }
  &.slide-enter-active {
    width: 300px;
  }
  &.slide-exit {
    transition: all .3s ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.div`
  float: right;
  font-style: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-style: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height:  38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.register {
    color: #ec6149;
    cursor: pointer;
  }
  &.write {
    color: #fff;
    background: #ec6149;
  }
`