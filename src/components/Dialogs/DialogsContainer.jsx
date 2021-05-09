import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMessage } from '../../redux/dialogsReducer'

import Dialogs from './Dialogs';

export const DialogsContainer = () => {
    const state = useSelector(state => state.messagePage);
    const dispatch = useDispatch();
    const handleAddMessage = (text) => {
        dispatch(addMessage(text))
    }
    return (
        <Dialogs
            newMessageText={state.newMessageText}
            dialog={state.dialog}
            message={state.message}
            addMessage={handleAddMessage}
        />
    )
    
}
