import React from'react';
import { connect } from 'react-redux';
import { addPostAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps=(state)=>{
  return{
    post:state.profilePage.post,
     newPostText:state.profilePage.newPostText
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
        addPost:(text)=>{
      let action=addPostAC(text);
  dispatch(action)
    }
  }
}

const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;

