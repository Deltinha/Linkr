import styled from 'styled-components';

const SignUp = styled.div`
    background-color: #333333;
    width: 100%;
    height: 100%;
    position: relative;
    
    
`;

const LeftContainer = styled.div`
    background-color: #151515;
    width: calc(100vw - 535px);
    height: 100%;
    box-sizing: border-box;
    box-shadow: 4px 0 4px 0 rgba(0,0,0,0.25);
`;

const TextContainer = styled.div`
    font-weight: 700;
    color: white;
    position: absolute;
    top: 301px;
    left: 144px;

    h1 {
        font-size: 106px;
        margin: 0;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 43px;
        margin: 0;
    }
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    position: absolute;
    right: 54px;
    top: 274px;

    input {
        width: 429px;
        height: 65px;
        box-sizing: border-box;
    }

    button {
        width: 429px;
        height: 65px;
        box-sizing: border-box;
    }

    a {
        text-decoration: underline;
        color: white;
    }

`

export {
    SignUp,
    LeftContainer,
    TextContainer,
    Form,
};