import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { follow, getUsers, setPageSize, unfollow, } from '../../redux/friendsReducer';

import Friends from './Friends';

export const FriendsContainer = props => {

  const state = useSelector(state => state.friendsPage);
  const dispatch = useDispatch();
  const isAuth = true

  React.useEffect(() => {
    dispatch(getUsers(state.currentPage, state.pageSize))
  }, [])
  const onPageChanged = (pageNumber) => {
    dispatch(getUsers(pageNumber, state.pageSize))
  }
  return (
    <Friends
      totalUsersCount={state.totalUsersCount}
      pageSize={state.pageSize}
      currentPage={state.currentPage}
      users={state.users}
      onPageChanged={onPageChanged}
      setPageSize={(pageSize)=>dispatch(setPageSize(pageSize))}
      isFollowProcess={state.isFollowProcess}
      follow={(id)=>dispatch(follow(id))}
      unfollow={(id)=>dispatch(unfollow(id))}
      isAuth={isAuth}
    />
  )
}
