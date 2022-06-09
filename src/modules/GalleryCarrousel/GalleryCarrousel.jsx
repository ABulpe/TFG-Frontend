import React, { useRef, useState, useEffect } from 'react'
import Section from '../../components/Section/Section'
import Div from '../../components/Div/Div'
import Img from '../../components/Img/Img'
import Slider from "react-slick";
import GalleryImage from '../../modules/GalleryImage/GalleryImage'
import CarrouselButtons from '../../modules/CarrouselButtons/CarrouselButtons'
import { FiX } from 'react-icons/fi'


const GalleryCarrousel = ({imageArray, screenWidth}) => {
    
    const [image, setImage] = useState('')

    const sliderSettings = {
        slidesToShow: screenWidth > 1220 ? 3 : screenWidth > 780 ? 2 : 1,
        slidesToScroll: 1,
        infinite: imageArray.length > 3,
        arrows: false,
    }

    const openImage = (image) => {
        setImage(image)
        document.querySelector('.overlay-gallery').style.display = 'flex'
    }

    const closeImage = () => {
        setImage('')
        document.querySelector('.overlay-gallery').style.display = 'none'
    }

    useEffect(() => {
        const images = document.querySelectorAll('.gallery-image--container')
        images.forEach( image => {
            image.parentElement.style.margin = '30px'
        })
    }, [])

    const slider = useRef(null)

    return (
        <Section className='gallery-carrousel'>
            <Div
                style={{margin: '20px 0'}}
            >
                <Slider 
                    {...sliderSettings}
                    ref={slider}
                >
                    {
                        imageArray.map( image => 
                            <GalleryImage
                                key={image.id}
                                imageUrl={image.imageUrl}
                                id={image.id}
                                onclick={() => openImage(image)}
                                carrousel={true}
                            />
                        )
                    }
                </Slider>
            </Div>
            <CarrouselButtons
                newsCarrousel={true}
                slider={slider}
            />
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
            </Div>
        </Section>
    )
}

export default GalleryCarrousel