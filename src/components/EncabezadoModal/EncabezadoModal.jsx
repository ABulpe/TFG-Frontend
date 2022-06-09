import styled from 'styled-components'
import {COLORS} from '../../Share/Colors'

const EncabezadoModal = styled.div`

    display: flex
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3{
        font-weight: 500;
        font-size: 16px;
        color: ${COLORS.Blue};
    }

`
export default EncabezadoModal