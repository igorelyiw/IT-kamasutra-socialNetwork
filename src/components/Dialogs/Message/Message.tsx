import React from 'react';

import s from './Message.module.css'

type PropsType = {
    message: string
}
const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={s.message}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU" alt="" /> {props.message}</div>
    )
}
export default Message;