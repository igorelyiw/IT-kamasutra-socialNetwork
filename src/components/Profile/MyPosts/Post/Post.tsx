import React from 'react';
import s from './Post.module.css'

type PropsType = {
  message: string
  like: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={s.wrapper}>
      <img src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg" alt="" />
      <div className={s.message}>{props.message}</div>
      <div>
        <span>like </span>{props.like}
      </div>
    </div>
  )
}
export default Post;