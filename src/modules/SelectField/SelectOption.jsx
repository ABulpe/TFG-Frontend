import React, { useState, useEffect } from 'react'
import Div from '../../components/Div/Div'
import P from '../../components/P/P'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const SelectOption = (props) => {

    const [link, setLink] = useState('')
    const [hover, setHover] = useState(false)

    useEffect(() => {
        switch (props.type) {
            case 'news':
                setLink(`/noticias/${props.value}`)
                break
            case 'entities':
                setLink(`/entidades/${props.value}`)
                break
            case 'businesses':
                setLink(`/comercios/${props.value}`)
                break
        }
    }, [])

    return (
        <Link
            to={link}
        >
            <Div 
                style={{ 
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <P>{props.label}</P>
                <FiArrowRight 
                    className={hover ? 'news-arrow hover' : 'news-arrow'}
                />
            </Div>
        </Link>
    )
}

export default SelectOption