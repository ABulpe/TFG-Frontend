import styled from 'styled-components'


const ModalOverlay = styled.div`
    width: 100%;
    // min-height: fit-content;
    position: fixed;
    overflow-y: scroll;
    overscroll-behavior: contain;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${props => props.mostrarOverlay ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)'};
    padding: 40px;
    display: flex;
    align-items: ${props => props.posicionModal ? props.posicionModal : 'center' };
    justify-content: center;
    z-index: 3000;
    // cursor: pointer;
`

export default ModalOverlay