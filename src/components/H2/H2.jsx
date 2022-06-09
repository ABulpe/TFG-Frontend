import styled from 'styled-components'


const H2 = styled.h2`

    font-family: Gabriela;

    &.section-heading {
        margin-left: 20px;
    }

    &.contact-heading {
        margin-left: 20px;
    }

    &.news-detail--title {
        align-self: center;
    }

    &.list-heading {
        padding-left: 10px;
    }

    &.list-heading--responsive {
        display: none;

        @media (max-width: 480px) {
            display: flex;
        }

    }

`

export default H2;