import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import userImage from '../../assets/images/user.png'
import s from './Friends.module.css';
import Paginator from './Paginator/Paginator';

const Friends = (props) => {
    

    return <div>
        <div className={s.usersPage} >
            <h1>Users</h1>
           <Paginator 
           totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize} 
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
            />
            <div >
                {
                    props.users.map(u => <div key={u.id} className={s.user} >
                        <div className={s.image}>
                            <div >
                                <NavLink to={"/profile/" + u.id}>
                                    <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userImage} />
                                </NavLink>

                            </div>
                            <div>{u.followed ? <button disabled={props.isFollowProcess.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)

                            }}>Unfollow</button>
                                : <button disabled={props.isFollowProcess.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }</div>
                        </div>
                        <div className={s.about}>
                            <div className={s.name}>
                                <div><h2>{u.name}</h2></div>
                                <div><h3>{u.status}</h3></div>
                            </div>
                            <div className={s.city}>
                                <h2>
                                    <div>{"u.location.country"},</div>
                                    <div>{"u.location.city"}</div></h2>
                            </div>

                        </div>


                    </div>
                    )
                }
            </div>

        </div></div>
}
export default Friends;