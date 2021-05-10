import { Formik, useField, Form } from 'formik';
import React from 'react';

import * as Yup from 'yup'

export const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error
                ? (
                    <div className='error'>{meta.error}</div>
                )
                : null
            }
        </div>
    )
}
const CustomCheckbox = ({ ...props }) => {
    const [field, meta] = useField(props, 'checkbox');
    return (
        <div>
            <label className="checkbox"></label>
            <input type="checkbox" {...field} {...props} />
            {meta.touched && meta.error
                ? (
                    <div className='error'>{meta.error}</div>
                )
                : null
            }
        </div>
    )
}
const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email adress')
                    .required('Required'),
                password: Yup.number()
                    .min(5, 'Password is short')
                    .max(15, 'Password is a lot long')
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    alert(values)
                    resetForm()
                    setSubmitting(false)
                }, 3000);
            }}
        >
            <Form>
                <CustomTextInput label="email" name="email" type="email" placeholder="write your email" />
                <CustomTextInput label="password" name="password" type="password" placeholder="write your password" />
                <CustomCheckbox name="rememberMe">Remember Me</CustomCheckbox>
            </Form>
            <button type="submit" >Submit</button>
        </Formik>
    )
}

export default LoginForm;
