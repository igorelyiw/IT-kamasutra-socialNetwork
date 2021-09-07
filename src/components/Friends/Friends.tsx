import { Pagination } from 'antd';
import React from 'react';
import { NavLink, } from 'react-router-dom';
import userImage from '../../assets/images/user.png'
import { FilterType } from '../../redux/friendsReducer';
import { UsersType } from '../../types/types';
import s from './Friends.module.css';
import FriendsSearchForm from './FriendsSearchForm';

type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFollowProcess: Array<number>
    users: Array<UsersType>
    setPageSize: (size: number) => void
    onPageChanged: (pageNumber: number) => void
    onFilterChanged:(filter:FilterType)=>void
    unfollow: (id: number) => void
    follow: (id: number) => void
}
const Friends: React.FC<PropsType> = props => {
    const { currentPage, totalUsersCount, pageSize, users, isFollowProcess, onPageChanged, setPageSize, unfollow, follow,onFilterChanged } = props
    return <div>
        <div className={s.usersPage} >
            <FriendsSearchForm onFilterChanged={onFilterChanged}/>
            <h1>Users</h1>
            <Pagination
                current={currentPage}
                onChange={(e) => onPageChanged(e)}
                total={totalUsersCount}
                defaultPageSize={pageSize}
                onShowSizeChange={(current, size) => {
                    setPageSize(size)
                }}
            />
        
            <div >
                {
                    users.map(u => <div key={u.id} className={s.user} >
                        <div className={s.image}>
                            <div >
                                <NavLink to={"/profile/" + u.id}>
                                    <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userImage} />
                                </NavLink>
                            </div>
                            <div>{u.followed ? <button disabled={isFollowProcess.some(id => id === u.id)} onClick={() =>unfollow(u.id)}>Unfollow</button>
                                : <button disabled={props.isFollowProcess.some(id => id === u.id)} onClick={() => follow(u.id)}>Follow</button>}</div>
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