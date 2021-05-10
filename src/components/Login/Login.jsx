import React from 'react';
import { connect } from 'react-redux';
import LoginFormik from './LoginFormik';
import login from '../../redux/authReducer';

const Login = (props) => {
    
    return (
        <div>
            <h1>Login</h1>
<LoginFormik login={props.login} />
        </div>
    )
}
export default connect(null, { login })(Login);
