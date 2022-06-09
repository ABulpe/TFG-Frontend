import styled from 'styled-components';
import {COLORS} from '../../Share/Colors'

const H1 = styled.h1`
    
    color: ${COLORS.White};
    font-family: Gabriela;

    &.form-heading {
        color: ${COLORS.Black};
        font-size: 1.25em;
        margin-bottom: 30px;
    }

    &.header-heading {
        @media (max-width: 960px) {
            font-size: 1.5em;
        }
    }

    &.header-responsive--heading {
        font-size: 1.3em;
        width: fit-content;
        margin-right: 30px;
    }
    

`

export default H1