import React from 'react';

import 'antd/dist/antd.css';
import {  Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import FriendsContainer from './components/Friends/FriendsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import  Login  from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import { Button } from 'antd';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    
    <div className="app-wrapper">
     <HeaderContainer/>
      <Navbar  state={props.state.sidebar}/>
      <div className="app-wrapper-content">
      <Switch>
        <Route exact path="/"
        render={()=><Redirect to={'/profile'}/>}/>
      <Route path='/profile/:userId?'
       render={()=><ProfileContainer store={props.store}  />} />
        <Route path='/dialogs' 
        render={()=>  <DialogsContainer /> }
         />
         
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/friends' render={()=><FriendsContainer />} />
        <Route path='/login' render={()=><Login />} />
        <Route path='*' render={()=><div>404 NOT FOUND
          <Button type={'ghost'}>OK</Button>
        </div>} />
        </Switch>

     </div>
    </div>
    
  );
}


export default App;
