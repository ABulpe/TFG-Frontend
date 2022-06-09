import React, { useEffect } from 'react'
import Main from '../../components/Main/Main'
import Section from '../../components/Section/Section'
import H1 from '../../components/H1/H1'
import LoginForm from '../../modules/LoginForm/LoginForm'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (window.localStorage.getItem("loggedUser")) navigate("/")
    }, [])

    return (
        <Main className='auth-main'>
            <Section className='section-auth'>
                <H1 className='form-heading'>Iniciar sesión</H1>
                <LoginForm/>
                {/* <Div className='auth-div'>
                    <P>¿Aún no tienes una cuenta?</P>
                    <Link 
                        to='/admin/registro'
                        className='react-router--link'
                    >Regístrate</Link>
                </Div> */}
            </Section>
        </Main>
    )
}

export default Login