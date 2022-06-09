import styled from 'styled-components'

const Ol = styled.ol`

    & > li {

        &::marker {
            font-weight: bold;
            margin-right: 10px;
        }

    }

    width: 85%;
    margin-left: 50px;
    margin-top: 30px;

    @media (max-width: 650px) {
        margin-left: 30px;
        width: 90%;
    }

    @media (max-width: 480px) {
        margin-left: 25px;
    }

`
export default Ol