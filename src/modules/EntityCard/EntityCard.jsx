import React from 'react'
import Div from '../../components/Div/Div'
import H3 from '../../components/H3/H3'
import Img from '../../components/Img/Img'
import Line from '../../components/Line/Line'
import P from '../../components/P/P'

import TextTruncate from 'react-text-truncate'
import { FiMapPin } from 'react-icons/fi'

// Associations and Businesses
const EntityCard = ({image, name, description, streetAddress, streetNumber}) => {
    return (
        <Div className='entity-card--container'>
            <Div className='entity-card--left'>
                <Img src={image} alt={name} className='entity-card--image' />
            </Div>
            <Div className='entity-card--right'>
                <Div style={{width: 'fit-content'}}>
                    <H3 className='entity-card--title'>{name}</H3>
                    <Line 
                        backgroundColor='yellow'
                        width='120%'
                        margin='10px 0'
                        responsive='480'
                    />
                </Div>
                <TextTruncate
                    line={3}
                    element='p'
                    truncateText='...'
                    text={description}                        
                    className='entity-card--text'
                />
                <Div className='entity-card--location'>
                    <FiMapPin style={{ marginRight: '4px', verticalAlign: 'middle' }}/>
                    <P className='entity-card--text'>
                        {streetAddress ? streetAddress : '-'}{streetAddress && streetNumber ? ', ' + streetNumber : ''}
                    </P>
                </Div>
            </Div>
        </Div>
    )
}

export default EntityCard