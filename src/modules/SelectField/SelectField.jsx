import React, { useState, Fragment } from 'react'
import Select from 'react-select'
import { SelectFieldStyles, SearchBarStyles } from './SelectStyles'
import DropdownIndicator from './DropdownIndicator'
import SelectOption from './SelectOption'

const SelectField = ({options, field, form, placeholder, noOptionsMessage, searchBar, type}) => {
    
    const [menuOpen, setMenuOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (value, action) => {
        switch (action.action) {
            case 'input-change':
                value === '' ? setMenuOpen(false) : setMenuOpen(true)
                setInputValue(value)
                break
            case 'menu-close':
                setMenuOpen(false)
                break
        }
    }
    
    return (
        <Fragment>
            {
                searchBar ?
                <Select
                    // Para que no se borre el contenido al salir del input
                    // inputValue={inputValue}
                    classNamePrefix='react-select'
                    name={field.name}
                    placeholder={placeholder}
                    styles={SearchBarStyles}
                    isSearchable={true}
                    noOptionsMessage={() => noOptionsMessage}
                    options={options}
                    value={options ? options.find(option => option.value === field.value) : null}
                    onChange={option => {
                        option ? 
                        form.setFieldValue(field.name, option.value) :
                        form.setFieldValue(field.name, null)
                    }}
                    onInputChange={((value, action) => handleInputChange(value, action))}
                    menuIsOpen={menuOpen}
                    components={{DropdownIndicator}}
                    formatOptionLabel={(props) => <SelectOption type={type} {...props} />}
                /> :
                <Select
                    classNamePrefix='react-select'
                    name={field.name}
                    placeholder={placeholder}
                    styles={SelectFieldStyles}
                    isClearable={true}
                    isSearchable={true}
                    noOptionsMessage={() => noOptionsMessage}
                    options={options}
                    value={options ? options.find(option => option.value === field.value) : null}
                    onChange={option => {
                        option ? 
                        form.setFieldValue(field.name, option.value) :
                        form.setFieldValue(field.name, null)
                    }}
                />
            }
        </Fragment>
    )
}

export default SelectField