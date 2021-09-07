import React from 'react';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import s from './DialogItem.module.css'
type PropsType={
    id:number,
    name:string
}
export const DialogItem:FC<PropsType> = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name} </NavLink>
        </div>
        
    )
}
