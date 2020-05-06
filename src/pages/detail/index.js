import React from 'react';
import { connect } from 'react-redux'
import { DetailWrapper, Title, Content } from './style';

function Detail(props) {
  return (
    <DetailWrapper>
      <Title>
        {props.title}
      </Title>
      <Content dangerouslySetInnerHTML={{__html: props.content}}>
      </Content>
    </DetailWrapper>
  )
}
const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})
export default connect(mapState, null)(Detail);