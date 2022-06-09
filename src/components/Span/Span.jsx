import styled from 'styled-components'
import { COLORS } from '../../Share/Colors'

const Span = styled.span`
    
    &.news-span {
        margin-top: 5%;
    }

    &.form-label {
        padding: 0 0 15px 10px;
    }

    &.error {
        padding: 15px 0 5px 10px;
        color: ${COLORS.Red};
    }

    &.error-checkbox {
        justify-self: flex-end;
    }

    &.checkbox-span {
        margin-left: 5px;
        vertical-align: middle;
    }

    &.dropdown {
        color: ${COLORS.White};
        text-align: center;
        cursor: pointer;
    }

    &.responsive-dropdown {
        margin-bottom: 10px;
    }
    
`

export default Span;