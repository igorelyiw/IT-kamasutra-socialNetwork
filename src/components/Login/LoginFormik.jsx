import { useFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import login from '../../redux/authReducer';

const LoginFormik = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: (values) => {
            props.login({ email: values.email, password: values.password, rememberMe: values.rememberMe }).then(() => {
            })
            console.log(values.email, values.password, values.rememberMe)
        }
    })
    return (<form onSubmit={formik.handleSubmit}>
        <div>
            <input onChange={formik.handleChange} type="email" value={formik.values.email} name="email" />
        </div>
        <div>
            <input onChange={formik.handleChange} type="password" value={formik.values.password} name="password" />
        </div>
        <div>
            <input onChange={formik.handleChange} type="checkbox" value={formik.values.rememberMe} name="rememberMe" />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
    )
}

export default connect(null, { login })(LoginFormik);