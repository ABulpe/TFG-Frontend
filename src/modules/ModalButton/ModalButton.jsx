import React from 'react'
import Button from '../../components/Button/Button'
import P from '../../components/P/P'
import Tooltip from '@mui/material/Tooltip';
import { FiPlus, FiTrash2, FiEdit, FiCornerUpLeft } from 'react-icons/fi'

const ModalButton = ({children, onclick, tooltip, type, display, position, style}) => {
    return (
        <Tooltip 
            title={<P className='tooltip'>{tooltip}</P>}
            placement='bottom'
        >
            <Button 
                className={`modal-button ` + display}
                onClick={onclick}
                type={type}
                position={position}
                style={style}
            >
                {
                    type === 'add' ?
                    <FiPlus style={{fontSize: '24', marginRight: '5px'}} /> :
                    type === 'delete' ?
                    <FiTrash2 style={{fontSize: '24', marginRight: '5px'}} /> :
                    type === 'edit' ? 
                    <FiEdit style={{fontSize: '24', marginRight: '5px'}} /> :
                    <FiCornerUpLeft style={{fontSize: '24', marginRight: '5px'}} />
                }
                {children}
            </Button>
        </Tooltip>
    )
}

export default ModalButton