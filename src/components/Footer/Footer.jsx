import styled from 'styled-components';
import {COLORS} from '../../Share/Colors'


const Footer = styled.footer`
    background-color: ${COLORS.LightBlue};
    min-height: 30vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    padding-bottom: 2vh;

    @media (max-width: 690px) {
        font-size: 12px;

        & svg.footer-facebook {
            font-size: 20px!important;
        }

        & svg.footer-youtube {
            font-size: 24px!important;
        }

    }

    @media (max-width: 590px) {

        & svg.footer-facebook {
            font-size: 15px!important;
        }

        & svg.footer-youtube {
            font-size: 19px!important;
        }

    }

`

export default Footer;