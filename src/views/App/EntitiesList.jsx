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
import ModalButton from "../../modules/ModalButton/ModalButton"
import Span from '../../components/Span/Span'


const EntitiesList = () => {

    const [user, setUser] =  useState()
    const [entitiesList, setEntitiesList] = useState([])
    const [coordsList, setCoordsList] = useState([])
    const navigate = useNavigate()

    const getEntitiesList = async () => {
        try {
            const response = await axios.get('api/associations');
            const entitiesList = response.data.map( entity => {
                return (
                    {
                        id: entity.id,
                        name: entity.name,
                        image: entity.imageUrl,
                        description: entity.description,
                        streetAddress: entity.streetAddress,
                        streetNumber: entity.streetNumber
                    }
                )
            })

            setEntitiesList(entitiesList)

            const coordsList = response.data.map( entity => {
                return (
                    {
                        name: entity.name,
                        lat: entity.latitude,
                        lng: entity.longitude,
                        id: entity.id,
                        urlPath: 'entidades'
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
        const loggedUser = checkLoggedUser()
        if (loggedUser) setUser(loggedUser)
        getEntitiesList()
    }, [])


    return (
        <Main className='list-main'>
            <Section className='list-section--left'>
                <Div>
                    <Div style={{ width: 'fit-content' }}>
                        <H2 className='list-heading'>
                            Entidades
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
                            placeholder={'Busca una entidad...'}
                            type={'entities'}
                        />
                        {          
                            user?.role === 1 ?
                            <ModalButton 
                                onclick={()=> {navigate('/admin/registro/entidad')}}
                                tooltip='Agregar entidad'
                                position='relative'
                                type='add'
                                style={{margin: '0 3% 30px 0'}}
                                display='entity'
                            >
                                <Span>Agregar entidad</Span>
                            </ModalButton>
                            : null
                        }
                    </Div>
                
                </Div>
                <Div className='list-container'>
                    {
                        entitiesList.map( entity => (
                            <Link
                                // to={`/entidades/${removeSpaces(entity.name)}`}
                                to={`/entidades/${entity.id}`}
                                key={entity.id}
                                className='entity-link'
                            >
                                <EntityCard 
                                    key={entity.id}
                                    name={entity.name}
                                    description={entity.description}
                                    streetAddress={entity.streetAddress}
                                    streetNumber={entity.streetNumber}
                                    image={entity.image}
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
                        onclick={()=> {navigate('/admin/registro/entidad')}}
                        tooltip='Agregar entidad'
                        position='relative'
                        type='add'
                        style={{margin: '0 3% 30px 0'}}
                        display='entity'
                    >
                        <Span>Agregar entidad</Span>
                    </ModalButton>
                    : null
                }
                <SearchBar
                    placeholder={'Busca una entidad...'}
                    type={'entities'}
                />
                <Div className='list-map--container'>
                    <Map
                        coords={coordsList}
                    />
                </Div>
            </Section>
        </Main>
    )
}

export default EntitiesList