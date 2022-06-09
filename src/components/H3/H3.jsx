import styled from 'styled-components'
import {COLORS} from '../../Share/Colors'

const H3 = styled.h3`

    &.footer-heading {
        color: ${COLORS.White};
        padding-left: 10px;
        padding-bottom: 5%;

        @media (max-width: 690px) {
            padding-bottom: 3%;
        }

    }

    &.entity-card--title {
        font-family: 'Gabriela';
        padding-left: 10px;
    }

`

export default H3;