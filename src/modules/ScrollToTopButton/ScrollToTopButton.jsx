import React, { useState, useEffect, Fragment } from 'react'
import Div from '../../components/Div/Div'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTopButton = () => {

    const [isVisible, setIsVisible] = useState(false)

    const listenToScroll = () => {
        const heightToShowAt = 300
        const windowScroll = document.body.scrollTop
        windowScroll < heightToShowAt ? setIsVisible(false) : setIsVisible(true)
    }

    useEffect(() => {
        document.querySelector('body').addEventListener('scroll', listenToScroll)
        return () => window.removeEventListener('scroll', listenToScroll)
    }, [])


    return (
        <Fragment>
            {
                isVisible ?
                <Div 
                    className='scroll-top--button'
                    onClick={() => {
                        document.body.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })
                    }} 
                >
                    <FiArrowUp
                        style={{
                            stroke: '#FFFFFF',
                            fontSize: '24'
                        }}
                    />
                </Div> : null
            }
        </Fragment>
    )
}

export default ScrollToTopButton