export const SelectFieldStyles = {
    control: (provided, state) => ({
        ...provided, 
        border: state.isFocused ? '2px solid #4F8FCBCC' : '2px solid #BCBCBC', 
        borderRadius: '0.5em', 
        cursor: 'text',
        boxShadow: state.isFocused && '0 0 5px 1px #4F8FCB',
        transition: 'all 0.2s ease-in'
    }),
    indicatorsContainer: (styles) => ({
        ...styles, 
        cursor: 'pointer',
    }),
    option: (styles) => ({
        ...styles, 
        cursor: 'pointer'
    }),
}

export const SearchBarStyles = {
    control: (provided, state) => ({
        ...provided,
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
        border: state.isFocused ? '2px solid #4F8FCBCC' : '2px solid #FFFFFF',
        borderRadius: '0.5em',
        transition: 'all 0.2s ease-in',
        cursor: 'text',
        '&:hover': {
            borderColor: !state.isFocused && '#FFFFFF'
        }
    }),
    indicatorsContainer: (styles) => ({
        ...styles, 
        cursor: 'pointer',
    }),
    indicatorSeparator: (styles) => ({
        display: 'none',
    }),
    option: (styles) => ({
        ...styles, 
        cursor: 'pointer'
    }),
}