import styled from 'styled-components';
import {COLORS} from '../../Share/Colors'


const Li = styled.li`

    color : ${COLORS.White};

    &.nav-link {

        padding: 1% 20px;

        & > a, > span {

            position: relative;
        
            &::after {
                content: "";
                position: absolute;
                display: flex;
                width: 100%;
                height: 1.5px;
                bottom: -5px;
                background-color: ${COLORS.White};
                transform: scaleX(0);
                transition: transform 0.3s ease;
            }

            &.active::after {
                transform: scaleX(1);
            }
        
        }

        & > a:hover::after {
            transform: scaleX(1);
        }

    }

    &.dropdown-parent {

        display: flex;
        justify-content: center;
        cursor: pointer;
        position: relative;

        &:hover > ul {

            display: block;
            position: absolute;
            border-radius: 0.5em;
            overflow: hidden;
            background-color: ${COLORS.White};
            top: 2.2em;
            line-height: 1.5;

            @media (max-width: 768px) {
                top: 1.8em;
            }

            & > li {

                padding: 10px 0 10px 20px;

                &:hover {
                    background-color: ${COLORS.LightBlue};

                    & > a {
                        color: ${COLORS.White};
                    }

                }

            }

        }
    }

    &.responsive-nav--li {
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        border-bottom: 2px solid ${COLORS.White};

        &:hover {
            background-color: ${COLORS.LightBlue};
        }

    }

    &.responsive-nav--li-dropdown {
        padding: 20px 0;
        width: 100%;
        // background-color: ${COLORS.LightBlue};
        
        &:hover {
            background-color: ${COLORS.LightBlue};
        }

    }

    &.responsive-dropdown--parent {
        padding-bottom: 0;

        &:hover {
            background-color: ${COLORS.Blue};
        }
    }

    &.about-us--li {
        color: ${COLORS.Black};
    }

`

export default Li;