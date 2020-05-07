import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Title, Content } from './style';
import { actionCreators } from './store/index';

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Title>
          {this.props.title}
        </Title>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
        </Content>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}
const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
});
const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});
export default connect(mapState, mapDispatch)(Detail);