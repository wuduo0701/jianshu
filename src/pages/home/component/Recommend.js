import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem} from '../style'

class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props;
    return(
      <RecommendWrapper>
        {
          recommendList.map((item) => {
            return(
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
            )
          })
        }
      </RecommendWrapper>
    ) 
  }
}
const mapState = (state) => ({
  recommendList: state.getIn(['home', 'recommendList'])
})
export default connect(mapState ,null)(Recommend);