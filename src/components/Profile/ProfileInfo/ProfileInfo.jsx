import React from'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import userImage from '../../../assets/images/user.png'
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
const ProfileInfo=(props)=>{
 
  if(!props.profile){
    return <Preloader/>

  }
const mainPhotoSelected=(e)=>{
 
props.savePhoto(e.target.files[0])
  
}
    return(
      
      <div className={s.profileInfo} >
      <div className={s.content}>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
      {props.isOwner &&
      <input type="file" onChange={mainPhotoSelected}/>
      }
      </div>
      <div className={s.contentInfo}>
       <div className={s.ava}><img src={props.profile.photos.large !=null
        ? props.profile.photos.large : userImage             } />
     <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      
      </div> 
       <div className={s.description}>
         <h2 className={s.fullName}>{props.profile.fullName}</h2>
<span><b>About me:</b></span> <span>{props.profile.aboutMe}</span>
<hr/>
<span><h3>My contacts:</h3></span>
<span><b>Facebook:</b></span> <span>{props.profile.contacts.facebook !=null ?props.profile.contacts.facebook :"-_-"}</span>
<br/>
<span><b>Website:</b></span> <span>{props.profile.contacts.website !=null ?props.profile.contacts.website :"-_-"}</span>
<br/>
<span><b>Vk:</b></span> <span>{props.profile.contacts.vk !=null ?props.profile.contacts.vk :"-_-"}</span>
<br/>
<span><b>Twitter:</b></span> <span>{props.profile.contacts.twitter !=null ?props.profile.contacts.twitter :"-_-"}</span>
<br/>
<span><b>Instagram:</b></span> <span>{props.profile.contacts.instagram !=null ?props.profile.contacts.instagram :"-_-"}</span>
<br/>
<span><b>YouTube:</b></span> <span>{props.profile.contacts.youtube !=null ?props.profile.contacts.youtube :"-_-"}</span>
<br/>
<span><b>GitHub:</b></span> <span>{props.profile.contacts.github !=null ?props.profile.contacts.github :"-_-"}</span>
<br/>
<span><b>MainLink:</b></span> <span>{props.profile.contacts.mainLink !=null ?props.profile.contacts.mainLink :"-_-"}</span>
<hr/>
<span><b>Looking for a Job:</b></span> <span>{props.profile.lookingForAJob ?'I looking for a job' :'I have a job'}</span>
<br/>
<span><b>Small description about job:</b></span> <span>{props.profile.lookingForAJobDescription  }</span>


       </div>
</div>

</div>
    )
}
export default ProfileInfo;