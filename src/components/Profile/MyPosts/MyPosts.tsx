import { useFormik } from 'formik';
import React, { createRef } from 'react';

import { PostType } from '../../../types/types';
import s from './MyPosts.module.css'
import Post from './Post/Post';

export type MapPropsType={
  post:Array<PostType>


}
export type DispatchPropsType={
  addPost:(postText:string)=>void

}
const MyPosts:React.FC<MapPropsType&DispatchPropsType> = props => {
  let postsElements = [...props.post].reverse().map((p) => <Post key={p.id} message={p.message} like={p.like} />);
  return (
    <div className={s.postsBlock}>
      <div className={s.postsWrapper}><h1>My post:</h1>
        <NewPostForm addPost={props.addPost} />
        <div >
          {postsElements}
        </div>
      </div>
    </div>
  )
}
const MyPostMemorized=React.memo(MyPosts)

const NewPostForm:React.FC<DispatchPropsType> = (props) => {
  const formik = useFormik({
    initialValues: {
      newPostText: ''
    },
    onSubmit: (values, actions) => {
      props.addPost(values.newPostText);
      actions.resetForm({
        values: {
          newPostText: ''
        }
      })
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <textarea
          onChange={formik.handleChange}
          value={formik.values.newPostText}
          className={s.textareaCustom}
          name="newPostText"
          placeholder="Write your posts..."
        ></textarea>
      </div>
      <button type="submit" className={s.submitButton} >Add post</button>
    </form>
  )

}

export default MyPostMemorized;

