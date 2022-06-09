import React, {useEffect, useState, useLayoutEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom"
import Main from '../../components/Main/Main'
import Section from '../../components/Section/Section'
import Div from '../../components/Div/Div'
import H2 from '../../components/H2/H2'
import Line from '../../components/Line/Line'
import P from '../../components/P/P'
import Img from '../../components/Img/Img'
import ContactInfo from '../../modules/ContactInfo/ContactInfo'
import ContactMap from '../../modules/ContactMap/ContactMap'
import NewsCarrousel from '../../modules/NewsCarrousel/NewsCarrousel'
import GalleryCarrousel from '../../modules/GalleryCarrousel/GalleryCarrousel'
import checkLoggedUser from '../../services/checkLoggedUser'
import axios from 'axios'
import {displaySocialMedia} from '../../Share/utilities'
import DeleteConfirmation from '../../modules/DeleteConfirmation/DeleteConfirmation'
import ModalButton from '../../modules/ModalButton/ModalButton'
import Modal from '../../modules/Modal/Modal'
import Span from '../../components/Span/Span'
import deleteEntity from '../../services/deleteEntity'



const Entity = () => {
    
    const [deleteModalState, setDeleteModalState] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [socialMedia, setSocialMedia] = useState({})
    const [coords, setCoords] = useState([])
    const [entity, setEntity] = useState({})
    const { id } = useParams()
    const [imageList, setImageList] = useState([])
    const [newsList, setNewsList] = useState([])
    const [user, setUser] = useState()
    const navigate = useNavigate()


    const getEntityDetail = async () => {
        try {
            const response = await axios.get(`api/associations/${id}`);
            const entityDetail = response.data
            entityDetail.description = entityDetail.description.split('\n')

            const coords = [{
                name: entityDetail.name,
                lat: entityDetail.latitude,
                lng: entityDetail.longitude
            }]
            
            const socialMedia = {
                'email': entityDetail.email,
                'phone': entityDetail.phone,
                'mobile': entityDetail.mobile,
                'twitter': displaySocialMedia(entityDetail.twitter),
                'instagram': displaySocialMedia(entityDetail.instagram),
                'facebook': entityDetail.facebook
            }

            setEntity(entityDetail)
            setCoords(coords)
            setNewsList(entityDetail.news)
            setImageList(entityDetail.image)
            setSocialMedia(socialMedia)

        } 
        
        catch (error) {
            console.log(error)
            navigate('/404')
        }
    }

    const updateSize = () => {
        setScreenWidth(window.innerWidth)
    }


    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, [])
    
    useEffect(() => {
        const loggedUser = checkLoggedUser()
        if (loggedUser) setUser(loggedUser)
        getEntityDetail()
    }, [])


    return (
        <Main>
            <Section className='index-section' firstSection={true}>
                <Div className='section-div entity'>
                    <Div style={{width: 'fit-content'}}>
                        <H2 className='section-heading'>
                            {entity.name}
                        </H2>
                        <Line 
                            backgroundColor='yellow'
                            margin='10px 0 20px 0'
                            width='120%' />
                        </Div>
                    <Div>
                        {
                            entity.description?.map(paragraph => (
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
                        user?.role === 1 || user?.association === entity.id ?

                        <ModalButton
                            onclick={()=> setDeleteModalState(!deleteModalState)}
                            position='relative'
                            tooltip='Eliminar entidad'
                            type='delete'
                        >
                            <Span>Eliminar entidad</Span>
                        </ModalButton>
                        : null
                    }
                </Div>
                <Div className='logo-container'>
                    <Img src={entity.imageUrl} alt={entity.name} className='index-logo entity-img' />
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
                    streetAddress={entity.streetAddress}
                    streetNumber={entity.streetNumber}
                    postalCode={entity.postalCode}
                    coords={coords}
                />
            </Section>
            <NewsCarrousel 
                newsArray={newsList}
            />
            <GalleryCarrousel
                imageArray={imageList}
                screenWidth={screenWidth}
            />
            <Modal
                titulo = "Eliminar entidad"
                state = {deleteModalState}
                changeState = {setDeleteModalState}
                mostrarHeader = {true}
                mostrarOverlay = {true}
                posicionModal={'center'}
            >
                <DeleteConfirmation
                    type='entity'
                    changeModalState={()=> setDeleteModalState(!deleteModalState)}
                    contentId={entity.id}
                    deleteContent={deleteEntity}
                />
            </Modal>
        </Main>
    )
}

export default Entity