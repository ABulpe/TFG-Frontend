import React from 'react'
import Main from '../../components/Main/Main'
import P from '../../components/P/P'
import Div from '../../components/Div/Div'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Main className='not-found--main'>
            <Div className='animation-background'>
                <Div className='animation-wave'></Div>
                <Div className='animation-wave animation-wave--second'></Div>
                <Div className='animation-wave animation-wave--third'></Div>
            </Div>
            <P className='not-found--number'>404</P>
            <P className='not-found--text'>La página que estabas buscando no existe.</P>
            <Link to='/' className='not-found--link'>Volver al inicio</Link>
        </Main>
    )
}

export default NotFound