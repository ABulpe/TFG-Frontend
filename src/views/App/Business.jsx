import React, { useState, useEffect } from 'react'
import Main from '../../components/Main/Main'
import Section from '../../components/Section/Section'
import Div from '../../components/Div/Div'
import Img from '../../components/Img/Img'
import H2 from '../../components/H2/H2'
import P from '../../components/P/P'
import Line from '../../components/Line/Line'
import ContactInfo from '../../modules/ContactInfo/ContactInfo'
import ContactMap from '../../modules/ContactMap/ContactMap'
import checkLoggedUser from '../../services/checkLoggedUser'
import {displaySocialMedia} from '../../Share/utilities'
import DeleteConfirmation from '../../modules/DeleteConfirmation/DeleteConfirmation'
import ModalButton from '../../modules/ModalButton/ModalButton'
import Modal from '../../modules/Modal/Modal'
import Span from '../../components/Span/Span'
import deleteBusiness from '../../services/deleteBusiness'

import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const Business = () => {

    const [deleteModalState, setDeleteModalState] = useState(false)
    const [socialMedia, setSocialMedia] = useState({})
    const [coords, setCoords] = useState([])
    const [business, setBusiness] = useState({})
    const { id } = useParams()
    const [user, setUser] = useState()
    const navigate = useNavigate()

    const getBusinessDetail = async () => {
        try {
            const response = await axios.get(`api/bussines/${id}`);
            const businessDetail = response.data
            businessDetail.description = businessDetail.description.split('\n')
            setBusiness(businessDetail)

            const coords = [{
                name: businessDetail.bussinessName,
                lat: businessDetail.latitude,
                lng: businessDetail.longitude
            }]
            setCoords(coords)
            
            const socialMedia = {
                'email': businessDetail.email,
                'phone': businessDetail.phone,
                'mobile': businessDetail.mobile,
                'twitter': displaySocialMedia(businessDetail.twitter),
                'instagram': displaySocialMedia(businessDetail.instagram),
                'facebook': businessDetail.facebook
            }
            setSocialMedia(socialMedia)

        } 
        
        catch (error) {
            console.log(error)
            navigate('/404')
        }
    }

    useEffect(() => {
        const loggedUser = checkLoggedUser()
        if (loggedUser) setUser(loggedUser)
        getBusinessDetail()
    }, [])


    return (
        <Main>
            <Section className='index-section' firstSection={true}>
                <Div className='section-div entity'>
                    <Div style={{width: 'fit-content' }}>
                        <H2 className='section-heading'>
                            {business.bussinessName}
                        </H2>
                        <Line
                            backgroundColor='yellow'
                            margin='10px 0 20px 0'
                            width='120%'
                        />
                    </Div>
                    <Div>
                        {
                            business.description?.map(paragraph => (
                                <P 
                                    className='entity-detail--description'
                                    key={paragraph}
                                >
                                    {paragraph}
                                </P>
                            ))
                        }
                    </Div>
                    {
                        user?.role === 1 ?

                        <ModalButton
                            onclick={()=> setDeleteModalState(!deleteModalState)}
                            position='relative'
                            tooltip='Eliminar comercio'
                            type='delete'
                        >
                            <Span>Eliminar comercio</Span>
                        </ModalButton>
                        : null
                    }
                </Div>
                <Div className='logo-container'>
                    <Img src={business.imageUrl} alt={business.bussinessName} className='index-logo entity-img' />
                </Div>
            </Section>
            <Section className='section-gray contact-info'>
                {
                    Object.keys(socialMedia).map( key => {
                        return (
                            <ContactInfo
                                title={key}
                                content={socialMedia[key]}
                            />
                        )
                    })
                }
            </Section>
            <Section className='entity-section--bottom'>
                <ContactMap
                    streetAddress={business.streetAddress}
                    streetNumber={business.streetNumber}
                    postalCode={business.postalCode}
                    coords={coords}
                />
            </Section>
            <Modal
                titulo = "Eliminar comercio"
                state = {deleteModalState}
                changeState = {setDeleteModalState}
                mostrarHeader = {true}
                mostrarOverlay = {true}
                posicionModal={'center'}
            >
                <DeleteConfirmation
                    type='business'
                    changeModalState={()=> setDeleteModalState(!deleteModalState)}
                    contentId={business.id}
                    deleteContent={deleteBusiness}
                />
            </Modal>
        </Main>
    )
}

export default Business