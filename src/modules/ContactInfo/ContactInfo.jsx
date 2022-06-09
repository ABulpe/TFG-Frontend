import React from 'react'
import Div from '../../components/Div/Div'
import P from '../../components/P/P'
import { contactTranslations, socialMediaIcons, formatPhoneNumber } from '../../Share/utilities'

const ContactInfo = ({title, content}) => {

    return (
        <Div className='contact-info'>
            <Div>
                {
                    socialMediaIcons[title]
                }
            </Div>
            <Div className='contact-info--content'>
                <P className='contact-info--title'>
                    {contactTranslations[title]}
                </P>
                <P>
                    {
                        content !== undefined && content !== '' ? (
                            title === 'phone' || title === 'mobile' ?
                            formatPhoneNumber(content) :
                            content
                        ) : '-'
                    }
                </P>
            </Div>
        </Div>
    )
}

export default ContactInfo;