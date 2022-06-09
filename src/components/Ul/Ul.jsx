import styled from 'styled-components';

const Ul = styled.ul`

    ${props => props.nav && (
        `
            list-style : none;
            width : 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0;


            &.header-ul {
                justify-content: center;
            }

            &.responsive-nav--ul {
                display: flex;
                flex-direction: column;
        
                &.hidden {
                    display: none;
                }
        
            }
        
            &.footer-ul {
        
                @media (max-width: 1404px) {
                    justify-content: space-around;
                }
        
                @media (max-width: 370px) {
                    flex-direction: column;
        
                    & > li {
                        margin-bottom: 10px;
                    }
        
                }
        
            }

        `
    )}

    ${
        props => props.dropdown && (
            'display: none;'
        )
    }

    
    &.about-us--ul {

        width: 70%;
        margin-left: 50px;
        margin-top: 35px;
        list-style-image: url('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-forward-16.png');
    
        & > li::marker {
            margin-right: 7px;
        }

        @media (max-width: 650px) {
            margin-left: 30px;
            width: 90%;
        }
    

    }


`

export default Ul;