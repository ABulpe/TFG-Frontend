import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Div from '../../components/Div/Div'
import P from '../../components/P/P'
import Button from '../../components/Button/Button'

const DeleteConfirmation = ({type, contentId, changeModalState, deleteContent, redirect}) => {
    
    const [content, setContent] = useState('')
    const [navigation, setNavigation] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        switch (type) {
            case 'image':
                setContent('esta imagen')
                break
            case 'news':
                setContent('esta noticia')
                setNavigation('/noticias')
                break
            case 'entity':
                setContent('esta entidad')
                setNavigation('/entidades')
                break
            case 'business':
                setContent('este comercio')
                setNavigation('/comercios')
                break
        }
    }, [])

    return (
        <Div
            className='confirmation-div--container'
        >
            <P>¿Estás seguro de que quieres eliminar {content}?</P>
            <Div className='confirmation-div'>
                <Button 
                    className='confirmation-button confirmation-button--delete'
                    onClick={async () => {
                        const response = await deleteContent(contentId)
                        if (response.status === 204) {
                            if (redirect) {
                                redirect(contentId)
                                changeModalState(false)
                            }
                            else{
                                navigate(navigation)
                            }
                        }
                    }}
                >
                    Eliminar
                </Button>
                <Button 
                    className='confirmation-button confirmation-button--cancel'
                    onClick={changeModalState}
                >
                    Cancelar
                </Button>
            </Div>
        </Div>
    )
}

export default DeleteConfirmation