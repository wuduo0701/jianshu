import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;
// 首页列表项
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 4px;
  }
`
export const ListInfo = styled.div`
  overflow: hidden;
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

// 首页推荐部分
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props)=>props.imgUrl});
  background-size: contain;
`

//  作者榜部分

export const WriterWrapper = styled.div`
  width: 280px;
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
  height: 300px;
  line-height: 300px;
  text-align: center;
`

export const WriterUl = styled.ul`
  padding-left: 0;
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
`

export const WriterItem = styled.li`
  margin-top: 15px;
  line-height: 20px;
  height: 48px;
  .avator {
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
    cursor: pointer;
  }
  .content {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
    position: relative;
    top: -45px;
    left: 60px
  }
`
export const WriterName = styled.div`
  font-size: 14px;
  position: relative;
  top: -45px;
  left: 60px;
  cursor: pointer;
`
//  关注
export const Follow = styled.div`
  float: right;
  position: relative;
  top: -90px;
  margin-top: 5px;
  padding: 0;
  font-size: 13px;
  color: #42c02e;
  cursor: pointer;
`
//  查看全部
export const FindAll = styled.div`
  width: 278px;
  height: 35px;
  line-height: 40px;
  margin: 30px 0;
  background-color: #f7f7f7;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 13px;
  color: #787878;
  cursor: pointer;
`


// 阅读更多部分
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`

//  回到顶部部分

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`
