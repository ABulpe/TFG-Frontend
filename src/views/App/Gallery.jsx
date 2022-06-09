import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Main from '../../components/Main/Main'
import Section from '../../components/Section/Section'
import GalleryImage from '../../modules/GalleryImage/GalleryImage'
import ModalButton from '../../modules/ModalButton/ModalButton'
import Span from '../../components/Span/Span'
import Div from '../../components/Div/Div'
import Img from '../../components/Img/Img'
import { FiX } from 'react-icons/fi'
import checkLoggedUser from '../../services/checkLoggedUser'
import Modal from '../../modules/Modal/Modal'
import ImageForm from '../../modules/ImageForm/ImageForm'
import DeleteConfirmation from '../../modules/DeleteConfirmation/DeleteConfirmation'
import deleteImage from '../../services/deleteImage'


const Gallery = () => {

    const [contentChange, setContentChange] = useState({})
    const [addModalState, setAddModalState] = useState(false);
    const [deleteModalState, setDeleteModalState] = useState(false);
    const [imageList, setImageList] = useState([])
    const [image, setImage] = useState('')
    const [user, setUser] = useState()

    const openImage = (image) => {
        setImage(image)
        document.querySelector('.overlay-gallery').style.display = 'flex'
    }

    const closeImage = () => {
        document.querySelector('.overlay-gallery').style.display = 'none'
    }

    const getImageList = async () => {
        try {
            const response = await axios.get('api/images');
            const imageList = response.data.map( image => {
                return (
                    {
                        id: image.id,
                        imageUrl: image.imageUrl,
                        association: image.association
                    }
                )
            })
            setImageList(imageList)
        }

        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getImageList()
    }, [contentChange])

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
                    onclick={()=> setAddModalState(!addModalState)}
                    tooltip='Agregar imagen'
                    type='add'
                >
                    <Span>Agregar imagen</Span>
                </ModalButton>
            }
            <Section className='gallery-section'>
                {
                    imageList.map( image => (
                        <GalleryImage
                            key={image.id}
                            id={image.id}
                            imageUrl={image.imageUrl}
                            onclick={() => openImage(image)}
                            carrousel={false}
                        />
                    ))
                }
            </Section>
            <Div 
                className='overlay overlay-gallery' 
                style={{display: 'none'}}
                onClick={() => closeImage()}
            >
                <Img 
                    src={image.imageUrl} 
                    alt={image.id}
                />
                <FiX 
                    style={{
                        stroke: '#FFF', 
                        fontSize: '28',
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        margin: '3% 4%',
                    }}
                />
                {
                    // solo pueden borrar los administradores o usuarios de la asociacion
                    user?.role === 1 || image?.association === user?.association ? 
                    <ModalButton
                        onclick={()=> setDeleteModalState(!deleteModalState)}
                        tooltip='Eliminar imagen'
                        type='delete'
                        display='overlay'
                    >
                        <Span>Eliminar imagen</Span>
                    </ModalButton> 
                    : null
                }
            </Div>
            <Modal
                titulo = "Agregar imagen"
                state = {addModalState}
                changeState = {setAddModalState}
                mostrarHeader = {true}
                mostrarOverlay = {true}
                posicionModal={'center'}
            >
                <ImageForm 
                    user={user}
                    // cerrar el modal
                    changeModalState={setAddModalState}
                    // redirigir al listado y hacer que recargue
                    // para que aparezca la nueva imagen
                    redirect={setContentChange}    
                />
            </Modal>
            <Modal
                titulo = "Eliminar imagen"
                state = {deleteModalState}
                changeState = {setDeleteModalState}
                mostrarHeader = {true}
                mostrarOverlay = {true}
                posicionModal={'center'}
            >
                <DeleteConfirmation
                    type='image'
                    changeModalState={()=> setDeleteModalState(!deleteModalState)}
                    contentId={image.id}
                    deleteContent={deleteImage}
                    redirect={setContentChange}
                />
            </Modal>
        </Main>
    )
}

export default Gallery