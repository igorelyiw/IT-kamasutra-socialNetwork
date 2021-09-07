import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import s from './Header.module.css'
type PropsType = {
    isFetching: boolean,
    isAuth: boolean,
    login: string
}
const Header: React.FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"></img>
            <div className={s.loginBlock}>
                <div className={s.preloader}>
                    {props.isFetching ? <Preloader /> : null}
                </div>
                <div>
                    {props.isAuth ? props.login
                        : <NavLink to="/login">Login</NavLink>}
                </div>
            </div>
        </header>
    )
}
export default Header;