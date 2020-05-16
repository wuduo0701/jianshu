import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterUl, WriterItem, FindAll, WriterName, Follow} from '../style';

class Writer extends PureComponent {
  render() {
    const { writer } = this.props;
    return(
      <WriterWrapper>
        <WriterUl>
          {
            writer.map((item) => {
              return (
                <WriterItem key={item.get('id')}>
                  <img src={item.get('imgUrl')} alt="" className="avator"/>
                  <WriterName>{item.get('writerName')}</WriterName>
                  <p className='content'>{item.get('content')}</p>
                  <Follow>+关注</Follow>
                </WriterItem>
              )
            })
          }
        </WriterUl>
        <FindAll onClick={() => this.findAll()}>查看全部</FindAll>
      </WriterWrapper>
    )
  }
  findAll(){
    alert("功能正在完善哦😀")
  }
}
const mapState = (state) => ({
  writer: state.getIn(['home', 'writer']),
})
export default connect(mapState, null)(Writer);