import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {ListItem, ListInfo, LoadMore} from '../style';
import { connect } from 'react-redux';
import {actionCreators} from '../store/index';

class List extends PureComponent{
  render() {
    const { list, getMoreInfo, page } = this.props;
    return (
      <>
      {
        list.map((item) => {
          return (
            <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
              <ListItem >
                <img className="pic" src={item.get('img')} alt=""/>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })
      }
      <LoadMore onClick={() => getMoreInfo(page)}>阅读更多</LoadMore>
      </>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'acticlePage'])
})
const mapDispatch = (dispatch) => ({
  getMoreInfo(page) {
    dispatch(actionCreators.getMoreInfo(page))
  }
})
export default connect(mapState, mapDispatch)(List);