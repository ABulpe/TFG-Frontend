import React from 'react'
import Div from '../../components/Div/Div'
import Line from '../../components/Line/Line'
import P from '../../components/P/P'

import TextTruncate from 'react-text-truncate'
import {months} from '../../Share/utilities'

const NewsCard = ({title, image, content, date}) => {
    
    return (
        <Div 
            background={image}
        >
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
            <Div className='news-bottom'>
                <TextTruncate
                    line={1}
                    element='p'
                    truncateText='...'
                    text={title}
                    className='news-bottom--title'
                />
                <TextTruncate
                    line={2}
                    element='p'
                    truncateText='...'
                    text={content}
                    className='news-bottom--content'
                />
            </Div>
        </Div>
    )
}

export default NewsCard