import React, { PureComponent } from 'react';
import { WriterWrapper, WriterUl, WriterItem, FindAll, WriterName, Follow} from '../style'
class Writer extends PureComponent {
  render() {
    return(
      <WriterWrapper>
        <WriterUl>
          <WriterItem>
            <img src="https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" className="avator"/>
            <WriterName>梅拾璎</WriterName>
            <p className='content'>写了275.8k字 · 30.6k喜欢</p>
            <Follow>+关注</Follow>
          </WriterItem>
          <WriterItem>
            <img src="https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" className="avator"/>
            <WriterName>梅拾璎</WriterName>
            <p className='content'>写了275.8k字 · 30.6k喜欢</p>
            <Follow>+关注</Follow>
          </WriterItem>
          <WriterItem>
            <img src="https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" className="avator"/>
            <WriterName>梅拾璎</WriterName>
            <p className='content'>写了275.8k字 · 30.6k喜欢</p>
            <Follow>+关注</Follow>
          </WriterItem>
          <WriterItem>
            <img src="https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" className="avator"/>
            <WriterName>梅拾璎</WriterName>
            <p className='content'>写了275.8k字 · 30.6k喜欢</p>
            <Follow>+关注</Follow>
          </WriterItem>
          <WriterItem>
            <img src="https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" className="avator"/>
            <WriterName>梅拾璎</WriterName>
            <p className='content'>写了275.8k字 · 30.6k喜欢</p>
            <Follow>+关注</Follow>
          </WriterItem>
        </WriterUl>
        <FindAll>查看全部</FindAll>
      </WriterWrapper>
    )
  }
}

export default Writer;