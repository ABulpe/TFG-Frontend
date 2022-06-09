import React, {useEffect, useState} from 'react';
import Main from '../../components/Main/Main'
import Section from '../../components/Section/Section'
import Line from '../../components/Line/Line'
import Div from '../../components/Div/Div'
import H2 from '../../components/H2/H2'
import P from '../../components/P/P'
import ContactForm from '../../modules/ContactForm/ContactForm'
import ContactInfo from '../../modules/ContactInfo/ContactInfo'
import ContactMap from '../../modules/ContactMap/ContactMap'
import checkLoggedUser from '../../services/checkLoggedUser'


const Contact = () => {

    const [user,setUser] = useState()

    useEffect(() => {
        const user = checkLoggedUser()
        if (user) setUser(user)
    }, [])


    return (
        <Main className='contact-background'>
            <Section className='contact-section--top'>
                <Div className='contact-info--container'>
                    <Div style={{ width: 'fit-content' }}>
                        <H2 className='contact-heading' >Contacta con nosotros</H2>
                        <Line 
                            backgroundColor='yellow'
                            width='120%'
                            margin='20px 0'
                        />
                    </Div>
                    <P className='contact-text'>
                        Nos encantaría saber de ti, dinos en qué podemos ayudarte y nos pondremos en contacto contigo lo antes posible.
                    </P>
                    <Div hide={true} >
                        <ContactInfo title='email' content='vecinos.segundaaguada@hotmail.com'/>
                        <ContactInfo title='phone' content='956289625'/>
                        <ContactInfo title='mobile' content='606982077'/>    
                        <ContactInfo title='schedule' content='12:00 - 14:00'/>
                    </Div>
                </Div>
                <Div className='contact-form--container'>
                    <ContactForm/>
                </Div>
                <Div show={true} >
                        <ContactInfo title='email' content='vecinos.segundaaguada@hotmail.com'/>
                        <ContactInfo title='phone' content='956289625'/>
                        <ContactInfo title='mobile' content='606982077'/>    
                        <ContactInfo title='schedule' content='12:00 - 14:00'/>
                    </Div>
            </Section>
            <Section className='contact-section--bottom'>
                <ContactMap
                    streetNumber='1'
                    streetAddress='Avenida Segunda Aguada'
                    postalCode='11012'
                    title={true}
                    coords={[{lat:'36.514210437505575', lng:'-6.2763813733612315', name:'AVV Segunda Aguada'}]}
                />
            </Section>
        </Main>
    )
}

export default Contact;