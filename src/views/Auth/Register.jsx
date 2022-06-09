import React from 'react'
import Main from '../../components/Main/Main'
import Section from '../../components/Section/Section'
import H1 from '../../components/H1/H1'
import RegisterForm from '../../modules/RegisterForm/RegisterForm'
import Div from '../../components/Div/Div'
import P from '../../components/P/P'
import { Link } from 'react-router-dom'

const Register = () => {

    
    return (
        <Main className='auth-main'>
            <Section className='section-auth register'>
                <H1 className='form-heading'>Registro</H1>
                <RegisterForm/>
                <Div className='auth-div'>
                    <P>¿Ya tienes una cuenta?</P>
                    <Link 
                        to='/admin/login'
                        className='react-router--link'
                    >Inicia sesión</Link>
                </Div>
            </Section>
        </Main>
    )
}

export default Register