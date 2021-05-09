import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setUsers, setTotalUsersCount, getUsers, follow, unfollow } from '../../redux/friendsReducer';
import Friends from './Friends';
import {getFriends, getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,getIsFollowProcess} from '../../redux/friendsSelector';

import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)

  }
  onPageChanged = (pageNumber) => {

    this.props.getUsers(pageNumber, this.props.pageSize)

  }


  render() {
    console.log('Render users');
    return <>
      <div >{this.props.isFetching ? <Preloader /> : null} </div>
      <Friends totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        isFollowProcess={this.props.isFollowProcess}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        isAuth={this.props.isAuth}
      /></>
  }

}
let mapStateToProps = (state) => {
  return {
    users: getFriends(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowProcess: getIsFollowProcess(state),
    isAuth:state.auth.isAuth 
  }
}
export default compose(
  connect(mapStateToProps,
    { setUsers, setCurrentPage, setTotalUsersCount, getUsers, follow, unfollow }),
    withAuthRedirect
)(FriendsContainer);
