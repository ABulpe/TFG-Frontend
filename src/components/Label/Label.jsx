import styled from 'styled-components';

const Label = styled.label`

    display: flex;
    flex-direction: column-reverse;
    width: 70%;
    margin-bottom: 30px;

    &.label-policy {
        flex-direction: column;
        margin-left: 10px;
    }

    &.auth-label {
        width: 100%;
    }

    & > .error + .auth-password--input {
        border: 2px solid #E3090980;
        transition: all 0.2s ease-in;
    }

    & > .error + .input-focus {
        border: 2px solid #4F8FCBCC;
    }

    &.news-list--label {
        width: 100%;
    }

`

export default Label;