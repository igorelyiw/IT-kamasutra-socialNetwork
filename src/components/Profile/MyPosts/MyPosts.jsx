import { useFormik } from 'formik';
import React, { createRef } from 'react';
import { addPost } from '../../../redux/profileReducer';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = React.memo(props=> {
console.log('render');
  let postsElements = [...props.post].reverse().map((p) => <Post message={p.message} like={p.like} />);
  return (
    <div className={s.postsBlock}>
      <div>My post
      <NewPostForm addPost={props.addPost} />
        <div >
          {postsElements}
        </div>
      </div>
    </div>

  )
}
)
const NewPostForm = (props) => {
  

  const formik = useFormik({
    initialValues: {
      newPostText: ''
    },
    onSubmit: (values,actions) => {
      props.addPost(values.newPostText);
      actions.resetForm({
        values:{
      newPostText: ''
          
        }
      })
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <textarea
          onChange={formik.handleChange} value={formik.values.newPostText} name="newPostText"></textarea>
      </div>
      <button type="submit">Add post</button>
    </form>
  )

}

export default MyPosts;

