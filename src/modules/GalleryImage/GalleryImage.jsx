import React from 'react'
import Div from '../../components/Div/Div'
import Img from '../../components/Img/Img'

const GalleryImage = ({id, imageUrl, onclick, carrousel}) => {
    return (
        <Div 
            className={carrousel ? 'gallery-image--container carrousel' : 'gallery-image--container'}
        >
            <Img 
                src={imageUrl} 
                alt={id}
                className='gallery-img'
                onClick={onclick}
            />
        </Div>
    )
}

export default GalleryImage