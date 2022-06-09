import React from 'react'
import Div from '../../components/Div/Div'
import P from '../../components/P/P'
import Map from '../../modules/Map/Map'

import { MdOutlineDirections } from 'react-icons/md';

const ContactMap = ({streetAddress, streetNumber, postalCode, title, coords}) => {
    return (
        <Div className='contact-map--container'>
            <Div className='contact-map--info'>
                <Div className='contact-map--sede'>
                    <MdOutlineDirections style={{ fontSize: 25 }}/>
                    <P className='contact-map--sede-text'>
                        {
                            title ?
                            'Sede Social, situada en Edificio Hermanas Mirabal' :
                            'Cómo llegar'
                        }
                    </P>
                </Div>
                <Div className='contact-map--direccion'>
                    <P className='contact-map--direccion-text'>
                        {streetAddress ? streetAddress : '-'}{streetAddress && streetNumber && ', ' + streetNumber}
                    </P>
                    <P className='contact-map--direccion-text'>
                        {postalCode && postalCode + ', Cádiz'}
                    </P>
                </Div>
            </Div>
            <Div
                style={{height: '50vh'}}
            >
                <Map
                    coords={coords}
                />
            </Div>
        </Div>
    )
}

export default ContactMap