import React, { useRef } from 'react'
import Slider from 'react-slick'
import Img from '../../components/Img/Img'
import Div from '../../components/Div/Div'
import CarrouselButtons from '../CarrouselButtons/CarrouselButtons'

const Carrousel = ({imagesArray}) => {
    
    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    const slider = useRef(null);
    
    return (
        <Div className='carrousel-container'>
            <Slider 
                {...sliderSettings}
                ref={slider}
            >
                {
                    imagesArray.map(image => (
                        <Img 
                            key={image.id}
                            src={image.src}
                            alt={image.id}
                            className='carrousel-image'
                        />
                    ))
                }
            </Slider>
            <CarrouselButtons
                newsCarrousel={false}
                slider={slider}
            />
        </Div>
    )
}

export default Carrousel