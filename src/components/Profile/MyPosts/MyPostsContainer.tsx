import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../redux/profileReducer';
import { AppStateType } from '../../../redux/redux-store';

import MyPosts, { DispatchPropsType, MapPropsType } from './MyPosts';

const mapStateToProps = (state: AppStateType) => {
  return {
    post: state.profilePage.post

  }
}
const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { addPost: actions.addPostAC })(MyPosts);
export default MyPostsContainer;

