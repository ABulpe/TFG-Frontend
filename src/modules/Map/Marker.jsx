import React, { Fragment } from 'react'
import Div from '../../components/Div/Div'
import Tooltip from '@mui/material/Tooltip';
import P from '../../components/P/P'
import { Link } from 'react-router-dom'

const Marker = ({tooltip, id, urlPath}) => {
    
    return (
        <Fragment>
            {
                urlPath ? 
                <Link
                    to={`/${urlPath}/${id}`}
                >
                    <Tooltip
                        title={<P className='tooltip'>{tooltip}</P>}
                        placement='top' arrow
                    >
                        <Div
                            style={{
                                backgroundImage:'url(/images/mapIcon.svg)',
                                backgroundRepeat: 'no-repeat',
                                height: '40px',
                                width: '50px',
                                cursor: 'pointer'
                            }}
                            className="marker"
                        />
                    </Tooltip>
                </Link> :
                <Tooltip
                    title={<P className='tooltip'>{tooltip}</P>}
                    placement='top' arrow
                >
                    <Div
                        style={{
                            backgroundImage:'url(/images/mapIcon.svg)',
                            backgroundRepeat: 'no-repeat',
                            height: '40px',
                            width: '50px',
                            cursor: 'pointer'
                        }}
                        className="marker"
                    />
                </Tooltip>
            }
        </Fragment>
    )
}

export default Marker