import React, { useEffect, useState } from 'react'
import Div from '../../components/Div/Div'
import Label from '../../components/Label/Label'
import Span from '../../components/Span/Span'
import Button from '../../components/Button/Button'
import loginService from '../../services/login'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { Formik, Form, Field } from 'formik'
import {useNavigate} from "react-router-dom"
import * as Yup from 'yup'

const LoginForm = () => {


    const [error, setError] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    const [user, setUser] = useState()
    const navigate = useNavigate()

    
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    const navigateToHome = () => {
        navigate("/")
    }

    useEffect(()=>{
        const loggedUserJSON = window.localStorage.getItem("loggedUser")
        if (loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
        }
    },[])

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required()
    })

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                try{

                    const loginResponse = loginService(values)

                    loginResponse.then(response => {
                        if (typeof response === 'string') setError(response)
                        else navigateToHome()
                    })
                  
                    // setTimeout(()=>{
                    //     navigateToHome()
                    // },1000)
                  
                } 
                catch(err){
                    console.log(err)
                }
            }}
        >
            {
                ({handleChange, handleSubmit}) =>
                <Form 
                    onSubmit={handleSubmit}
                    className='auth-form'
                >
                    <Label 
                        htmlFor='email'
                        className='auth-label'
                    >
                        <Field
                            type='text'
                            name='email'
                            id='email'
                            placeholder='direcci??n de correo'
                            className='form-input'
                            onChange={handleChange}
                        />
                        <Span className='form-label'>Direcci??n de correo</Span>
                    </Label>
                    <Label 
                        htmlFor='password'
                        className='auth-label'
                    >
                        {
                            error && <Span className='error'>{error}</Span>
                        }
                        <Div 
                            className={
                                passwordFocus ? 
                                    'auth-password--input input-focus' : 
                                    'auth-password--input'
                            }
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        >
                            <Field
                                type={ passwordVisible ? 'text' : 'password' }
                                name='password'
                                id='password'
                                placeholder='contrase??a'
                                className='form-input--password'
                                onChange={handleChange}
                                onCopy={e => e.preventDefault()}
                                onPaste={e => e.preventDefault()}
                            />
                            <Button 
                                type='button'
                                className='password-button'
                                onClick={togglePasswordVisibility}
                            >
                                {
                                    passwordVisible ?
                                        <FiEyeOff /> :
                                        <FiEye />
                                }
                            </Button>
                        </Div>
                        <Span className='form-label'>Contrase??a</Span>
                    </Label>
                    <Button
                        type='submit'
                        value='Iniciar sesi??n'
                    >
                        Iniciar sesi??n
                    </Button>
                </Form>
            }
        </Formik>
    )
}

export default LoginForm