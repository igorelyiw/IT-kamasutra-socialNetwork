import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type PropsType={
    isOwner:boolean
    profile:Array<ProfileType>
    savePhoto:(file:File)=>void
    status:string
    updateStatus:(status:string)=>void
}
const Profile:React.FC<PropsType> = (props) => {
    return (
        <div >
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer  />

        </div>
    )
}
export default Profile;