import React from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions,  follow,  getUsers, unfollow,  } from '../../redux/friendsReducer';
import { AppStateType } from '../../redux/redux-store';
import { FilterType } from '../../redux/friendsReducer';

import Friends from './Friends';

export const FriendsContainer= props => {

  const state= useSelector((state) => state.friendsPage);
  const dispatch = useDispatch();
  const isAuth= true;

  React.useEffect(() => {
    dispatch(getUsers(state.currentPage, state.pageSize,state.filter))
  }, [])
  const onPageChanged = (pageNumber) => {
    dispatch(getUsers(pageNumber, state.pageSize,state.filter))
  }
  const onFilterChanged = (filter) => {

    dispatch(getUsers(1, state.pageSize,filter))
  }
  return (
    
    <Friends
      totalUsersCount={state.totalUsersCount}
      pageSize={state.pageSize}
      currentPage={state.currentPage}
      users={state.users}
      onPageChanged={onPageChanged}
      onFilterChanged={onFilterChanged}
      setPageSize={(pageSize)=>dispatch(actions.setPageSize(pageSize))}
      isFollowProcess={state.isFollowProcess}
      follow={(id)=>dispatch(follow(id))}
      unfollow={(id)=>dispatch(unfollow(id))}
      isAuth={isAuth}
    />
  )
}
