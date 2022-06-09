import React, { useState, useEffect } from 'react'
import Main from '../../components/Main/Main'
import Section from '../../components/Section/Section'
import SearchBar from '../../modules/SearchBar/SearchBar'
import NewsCard from '../../modules/NewsCard/NewsCard'
import { Link } from 'react-router-dom'
import ModalButton from '../../modules/ModalButton/ModalButton'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Modal from '../../modules/Modal/Modal'
import NewsForm from '../../modules/NewsForm/NewsForm'
import Span from '../../components/Span/Span'
import checkLoggedUser from '../../services/checkLoggedUser'
import axios from 'axios'


const NewsList = () => {

    const [addedNews, setAddedNews] = useState({})
    const [newsList, setNewsList] = useState([])
    const [user, setUser] = useState()
    const [modalState, setModalState] = useState(false);
    
    const getNewsList = async () => {
        try {
            const response = await axios.get('api/news');
            const newsList = response.data.map( news => {
                return (
                    {
                        id: news.id,
                        title: news.title,
                        image: news.imageUrl,
                        content: news.content,
                        date: new Date(news.date)
                    }
                )
            })
            setNewsList(newsList)
        }

        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getNewsList()
    }, [addedNews])

    useEffect(() => {
        const user = checkLoggedUser()
        if (user) setUser(user)
    }, [])

    
    return (
        <Main className='add-button--main'>
            {
                user && 
                <ModalButton 
                    display='main'
                    onclick={()=> {setModalState(!modalState)}}
                    tooltip='Agregar noticia'
                    type='add'
                >
                    <Span>Agregar noticia</Span>
                </ModalButton>
            }
            <Section className='news-list--top'>
                <SearchBar
                    placeholder='Busca una noticia...'
                    type='news'
                />
                {/* <Stack spacing={2}>
                    <Pagination count={10} color='primary' />
                </Stack> */}
            </Section>
            <Section className='news-list--container'>
                {
                    newsList.map(news => (
                        <Link 
                            to={`/noticias/${news.id}`}
                            key={news.id}
                        >
                            <NewsCard
                                title={news.title}
                                image={news.image}
                                content={news.content}
                                date={news.date}
                            />
                        </Link>
                    ))
                }
            </Section>
            <Modal
                titulo = "Agregar noticia"
                state = {modalState}
                changeState = {setModalState}
                mostrarHeader = {true}
                mostrarOverlay = {true}
                posicionModal={'center'}
            >
                <NewsForm 
                    user={user}
                    changeModalState={setModalState}
                    changeAddedNews={setAddedNews}    
                />
            </Modal>
        </Main>
    )
}

export default NewsList