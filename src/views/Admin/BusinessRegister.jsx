import React from 'react'
import Main from '../../components/Main/Main'
import Section from '../../components/Section/Section'
import H1 from '../../components/H1/H1'
import EntityAndBusinessForm from '../../modules/EntityAndBusinessForm/EntityAndBusinessForm'

const BusinessRegister = () => {

    
    return (
        <Main className='auth-main'>
            <Section className='section-auth register'>
                <H1 className='form-heading'>Registrar comercio</H1>
                <EntityAndBusinessForm type='business'/>
            </Section>
        </Main>
    )
}

export default BusinessRegister