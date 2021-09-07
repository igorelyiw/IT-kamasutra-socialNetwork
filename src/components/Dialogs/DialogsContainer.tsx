import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/dialogsReducer';
import { AppStateType } from '../../redux/redux-store';
import { Dialogs } from './Dialogs';


export const DialogsContainer = () => {
    const state = useSelector((state:AppStateType) => state.messagePage);
    const dispatch = useDispatch();
    const handleAddMessage = (text:string) => {
        dispatch(actions.addMessage(text))
    }
    return (
        <Dialogs
            messages={state}
            addMessage={handleAddMessage}
        />
    )

}
