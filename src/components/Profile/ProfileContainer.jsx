import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { profileThunk, getStatus, updateStatus,savePhoto } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    refreshComponent(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 14610
                ;
        }
        this.props.profileThunk(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {
        this.refreshComponent()
        
    }
componentDidUpdate(prevProps,prevState){
    if(this.props.match.params.userId!=prevProps.match.params.userId){
        this.refreshComponent()
        
    }
}
    render() {

        return (
            <Profile 
            isOwner={!this.props.match.params.userId}
            {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus} />
        )
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})



export default compose(
    connect(mapStateToProps, { profileThunk, getStatus, updateStatus,savePhoto }),
    withRouter,

    // withAuthRedirect

)(ProfileContainer)

