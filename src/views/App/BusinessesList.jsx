import React, { useState, useEffect } from 'react'
import Main from '../../components/Main/Main'
import Section from '../../components/Section/Section'
import Div from '../../components/Div/Div'
import P from '../../components/P/P'
import H2 from '../../components/H2/H2'
import Line from '../../components/Line/Line'
import SearchBar from '../../modules/SearchBar/SearchBar'
import EntityCard from '../../modules/EntityCard/EntityCard'
import Map from '../../modules/Map/Map'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import checkLoggedUser from '../../services/checkLoggedUser'
import { removeSpaces } from '../../Share/utilities'
import ModalButton from '../../modules/ModalButton/ModalButton'
import Span from '../../components/Span/Span'
import Modal from '../../modules/Modal/Modal'
import EntityAndBusinessForm from "../../modules/EntityAndBusinessForm/EntityAndBusinessForm"

const BusinessesList = () => {

    const [user, setUser] =  useState()
    const [businessesList, setBusinessesList] = useState([])
    const [coordsList, setCoordsList] = useState([])
    const [modalState,SetModalState] = useState(false)
    const navigate = useNavigate()

    const getBusinessesList = async () => {
        try {
            const response = await axios.get('api/bussines');
            const businessesList = response.data.map( business => {
                return (
                    {
                        id: business.id,
                        name: business.bussinessName,
                        image: business.imageUrl,
                        description: business.description,
                        streetAddress: business.streetAddress,
                        streetNumber: business.streetNumber
                    }
                )
            })

            setBusinessesList(businessesList)

            const coordsList = response.data.map( business => {
                return (
                    {
                        name: business.bussinessName,
                        lat: business.latitude,
                        lng: business.longitude,
                        id: business.id,
                        urlPath: 'comercios'
                    }
                )
            })
            setCoordsList(coordsList)
        }

        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const user = checkLoggedUser()
        if (user) setUser(user)
        getBusinessesList()
    }, [])


    return (
        <Main className='list-main'>
            <Section className='list-section--left'>
                <Div>
                    <Div style={{ width: 'fit-content' }}>
                        <H2 className='list-heading'>
                            Comercios
                        </H2>
                        <Line
                            backgroundColor='yellow'
                            width='120%'
                            margin='10px 0 15px 0'
                        />
                    </Div>
                    <P>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam assumenda, eligendi, nam ea iste, doloribus expedita totam error officiis accusantium nemo alias ex odit autem. Nobis similique autem laboriosam eos.</P>
                
                    <Div className="list-right--responsive">
                        <Div className='list-map--container'>
                            <Map
                                coords={coordsList}
                            />
                        </Div>
                        <SearchBar
                            placeholder={'Busca un comercio...'}
                            type={'businesses'}
                        />
                        {          
                            user?.role === 1 ?
                            <ModalButton 
                                onclick={()=> {navigate('/admin/registro/comercio')}}
                                tooltip='Agregar comercio'
                                position='relative'
                                type='add'
                                style={{margin: '0 3% 30px 0'}}
                                display='entity'
                            >
                                <Span>Agregar comercio</Span>
                            </ModalButton>
                            : null
                        }
                    </Div>
                
                </Div>
                <Div className='list-container'>
                    {
                        businessesList.map( business => (
                            <Link
                                // to={`/comercios/${removeSpaces(element.name)}`}
                                to={`/comercios/${business.id}`}
                                key={business.id}
                                className='entity-link'
                            >
                                <EntityCard 
                                    key={business.id}
                                    name={business.name}
                                    description={business.description}
                                    streetAddress={business.streetAddress}
                                    streetNumber={business.streetNumber}
                                    image={business.image}
                                />
                            </Link>
                        ))
                    }
                </Div>
            </Section>
            <Section className='list-section--right'>
                {          
                    user?.role === 1 ?
                    <ModalButton 
                        onclick={()=> {navigate('/admin/registro/comercio')}}
                        tooltip='Agregar comercio'
                        position='relative'
                        type='add'
                        style={{margin: '0 3% 30px 0'}}
                        display='entity'
                    >
                        <Span>Agregar comercio</Span>
                    </ModalButton>
                    : null
                }
                <SearchBar
                    placeholder={'Busca un comercio...'}
                    type={'businesses'}
                />
                <Div className='list-map--container'>
                    <Map
                        coords={coordsList}
                    />
                </Div>
            </Section>
            <Modal
                titulo = "Agregar Entidad"
                state = {modalState}
                changeState = {SetModalState}
                mostrarHeader = {true}
                mostrarOverlay = {true}
                posicionModal={'center'}
            >
                <EntityAndBusinessForm 
                    type= "entity"   
                />
            </Modal>
        </Main>
    )
}

export default BusinessesList