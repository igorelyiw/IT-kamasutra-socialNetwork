import React from 'react';

import s from './Dialogs.module.css'
import Message from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import { useFormik } from 'formik';

export const Dialogs = (props) => {
    let dialogElements = props.dialog.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messageElements = props.message.map((m) => <Message message={m.message} />)
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

const AddMessageForm = (props) => {
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
