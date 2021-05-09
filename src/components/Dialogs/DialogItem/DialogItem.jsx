import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import s from './DialogItem.module.css'

const DialogItem=(props)=>{
    let path="/dialogs/"+props.id;
    return(
<div className={s.dialog}>

                  <NavLink to={path}  activeClassName={s.active}>{props.name} </NavLink> 
                   </div>
    )
}




export default DialogItem;