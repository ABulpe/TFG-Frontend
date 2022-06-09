import styled from 'styled-components';
import {COLORS} from '../../Share/Colors';


const Link = styled.a`

    color: ${COLORS.White};
    text-decoration: none;
    cursor: pointer;

    &.news-content--link {
        margin: 40px 0 0 20px;
    }

    &.contact-policy, &.news-content--link, &.auth-link {

        color: ${COLORS.LightBlue};
        transition: all 0.2s ease;

        &:hover {
            color: ${COLORS.Blue};
            transition: all 0.2s ease;
            text-decoration: underline;
        }
    }

    ${
        props => props.dropdown && (
            `
                color: ${COLORS.Blue};
            `
        )
    }

`
export default Link;