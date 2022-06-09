import React from 'react'
import Section from '../../components/Section/Section'
import Line from '../../components/Line/Line'
import Div from '../../components/Div/Div'
import Img from '../../components/Img/Img'
import P from '../../components/P/P'

import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'
import Tooltip from '@mui/material/Tooltip';
import { months } from '../../Share/utilities'

const News = ({date, title, content, image, id}) => {
    return (
        <Section className='news-container'>
            <Div className='news-left'>
                <Img src={image} alt={title} className='news-img'/>
                <Div className='news-date'>
                    <P className='news-date--text'>
                        {date.getDate()}
                    </P>
                    <Line
                        width='100%'
                        backgroundColor='blue'
                    />
                    <P className='news-date--text'>
                        {months[date.getMonth()]}
                    </P>
                </Div>
            </Div>
            <Div className='news-right'>
                <Tooltip 
                    title={<P className='tooltip'>{title}</P>}
                    placement='top-start'
                >
                    <Div
                        // TextTruncate tiene que tener un contenedor 
                    >
                        <TextTruncate
                            line={1}
                            element='h2'
                            truncateText='...'
                            text={title}                        
                            className='news-content--title'
                        />
                    </Div>
                </Tooltip>
                <Line 
                    width='100%'
                    backgroundColor='yellow'
                    margin='15px 0 25px 0'
                    responsive='780'
                />
                <TextTruncate
                    line={3}
                    element='p'
                    truncateText='...'
                    text={content}
                    className='news-content--text'
                />
                <Link 
                    to={`/noticias/${id}`} 
                    className='react-router--link news-content--link'
                    onClick={() => {
                        document.querySelector('.nuestro-barrio').classList.remove('active')
                    }}
                >
                    Ir a la noticia
                </Link>
            </Div>
        </Section>
    )
}

export default News