import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { profileThunk, getStatus, updateStatus, savePhoto } from '../../redux/profileReducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { ProfileType } from '../../types/types';

type MapPropsType={
    profile:Array<ProfileType>
    status:string
};
type MapDispatchType={
    profileThunk:(id:number)=>void
    getStatus:(id:number)=>void
    updateStatus:(status:string)=>void
    savePhoto:(file:File)=>void
}
type PathParams={
    userId:string
}
type PropsType=MapPropsType&MapDispatchType&RouteComponentProps<PathParams>;
class ProfileContainer extends React.Component<PropsType> {
    refreshComponent() {
        let userId:number|null = +this.props.match.params.userId;
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
    componentDidUpdate(prevProps:PropsType, prevState:PropsType) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
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
let mapStateToProps = (state:AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
export default compose(
    connect(mapStateToProps, { profileThunk, getStatus, updateStatus, savePhoto }),
    withRouter,

)(ProfileContainer)

