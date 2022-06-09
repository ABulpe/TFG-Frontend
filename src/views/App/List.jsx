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
import { Link } from 'react-router-dom'
import checkLoggedUser from '../../services/checkLoggedUser'
import { removeSpaces } from '../../Share/utilities'


const List = ({type}) => {

    const [user, setUser] =  useState()
    const [list, setList] = useState([])
    const [coordsList, setCoordsList] = useState([])

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

            setList(entitiesList)

            const coordsList = response.data.map( entity => {
                return (
                    {
                        name: entity.name,
                        lat: entity.latitude,
                        lng: entity.longitude
                    }
                )
            })
            setCoordsList(coordsList)
        }

        catch (err) {
            console.log(err);
        }
    }

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

            setList(businessesList)

            const coordsList = response.data.map( business => {
                return (
                    {
                        name: business.bussinessName,
                        lat: business.latitude,
                        lng: business.longitude
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
        
        switch (type) {
            case 'entities':
                getEntitiesList()
                break
            case 'businesses':
                getBusinessesList()
                break
        }

    }, [])

    return (
        <Main className='list-main'>
            <Section className='list-section--left'>
                <Div>
                    <H2 className='list-heading'>
                        {
                            type === 'entities' ?
                            'Entidades' :
                            'Comercios'
                        }
                    </H2>
                    <Line 
                        backgroundColor='yellow'
                        width='40%'
                        margin='10px 0 15px 0'
                    />
                    <P>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam assumenda, eligendi, nam ea iste, doloribus expedita totam error officiis accusantium nemo alias ex odit autem. Nobis similique autem laboriosam eos.</P>
                </Div>
                <Div className='list-container'>
                    {
                        list.map( element => (
                            <Link
                                // to={type === 'entities' ? `/entidades/${removeSpaces(element.name)}` : `/comercios/${removeSpaces(element.name)}`}
                                to={type === 'entities' ? `/entidades/${element.id}` : `/comercios/${element.id}`}
                                key={element.id}
                            >
                                <EntityCard 
                                    key={element.id}
                                    name={element.name}
                                    description={element.description}
                                    streetAddress={element.streetAddress}
                                    streetNumber={element.streetNumber}
                                    image={element.image}
                                />
                            </Link>
                        ))
                    }
                </Div>
            </Section>
            <Section className='list-section--right'>
                <SearchBar
                    placeholder={type === 'entities' ?
                        'Busca una entidad...' :
                        'Busca un comercio...'
                    }
                    type={type}
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

export default List