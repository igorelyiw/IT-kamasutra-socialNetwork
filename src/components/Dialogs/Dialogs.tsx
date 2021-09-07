import React from 'react';

import s from './Dialogs.module.css'
import Message from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import { useFormik } from 'formik';
import { FC } from 'react';
import { InitialStateType } from '../../redux/dialogsReducer';

type PropsType={
    messages:InitialStateType,
    addMessage:(messageText:string)=>void

}
export const Dialogs:FC<PropsType> = props => {
    const {messages}=props
        
    let dialogElements = messages.dialog.map((d) => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messageElements = messages.message.map((m) => <Message key={m.id} message={m.message} />)
      return (
        <div className={s.dialogs} >
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div><div>
                <AddMessageForm addMessage={props.addMessage} />
            </div>
        </div>
    )
}

type PropsFormType={
    addMessage:(str:string)=>void
}
const AddMessageForm:FC<PropsFormType> = (props) => {
    const formik = useFormik({
        initialValues: {
            message: ''
        },
        onSubmit: (values,actions) => {
            props.addMessage(values.message);
            actions.resetForm({
                values:{
            message: ''
                }
            })
        }
    })
    return (<form onSubmit={formik.handleSubmit}>
        <div><textarea onChange={formik.handleChange}
            value={formik.values.message} placeholder="Enter your message..." name="message"></textarea></div>
        <button type="submit" >Add Message</button>
    </form>
    )
}
