import React from 'react'
import Div from '../../components/Div/Div'
import { FiSearch } from 'react-icons/fi'
import { COLORS } from '../../Share/Colors'

const DropdownIndicator = (props) => {
    return (
        <Div className="searchbar-div">
            <FiSearch
                style={{stroke: COLORS.White, fontSize: 18 }}
            />
        </Div>
    )
}

export default DropdownIndicator