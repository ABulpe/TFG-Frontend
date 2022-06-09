import styled from 'styled-components';
import {COLORS} from '../../Share/Colors'


const Line = styled.div`

    height : 2px;
    width: ${props => props.width};
    margin: ${props => props.margin};
    background-color: ${props => 
        props.backgroundColor === 'yellow' ?
        COLORS.Yellow :
        props.backgroundColor === 'white' ?
        COLORS.White : 
        COLORS.Blue
    };

    ${props => props.responsive && (
        `
            @media (max-width: ${props.responsive}px) {
                display: none;
            }
        `
    )}
    
`

export default Line;