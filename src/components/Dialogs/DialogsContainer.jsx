import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagePage.newMessageText,
        dialog: state.messagePage.dialog,
        message: state.messagePage.message

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            let action = addMessage(text);
            dispatch(action)
        }
       
    }

}
export default compose(
    connect(mapStateToProps, mapDispatchToProps) ,
    withAuthRedirect
)(Dialogs);
