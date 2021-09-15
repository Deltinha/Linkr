import styled from 'styled-components';

const SignUp = styled.div`
    background-color: #333333;
    width: 100%;
    height: 100%;
    position: relative;
`;

const LogIn = SignUp;

const WoodmarkContainer = styled.div`
    background-color: #151515;
    width: calc(100vw - 535px);
    height: 100%;
    box-sizing: border-box;
    box-shadow: 4px 0 4px 0 rgba(0,0,0,0.25);
 
    @media (max-width: 375px){
        left: 0;
        top: 0;
        height: 175px;
        width: 100vw;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25);
    }
`;

const TextContainer = styled.div`
    font-weight: 700;
    color: white;
    position: absolute;
    top: 301px;
    left: calc((100vw - 535px) * 0.1);

    h1 {
        font-size: 106px;
        margin: 0;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 43px;
        margin: 0;
    }

    @media (max-width: 375px){
        height: 100%;
        position: static;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1 {
            font-size: 76px;
            margin: 0;
        }

        h2 {
            font-size: 23px;
        }
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    position: absolute;
    right: calc((535px - 429px) / 2); /* Centers the form in the right gray space */
    top: 274px;

    input {
        width: 429px;
        height: 65px;
        box-sizing: border-box;
        border: none;
        font-size: 27px;
        padding: 0 17px 0 17px;
        border-radius: 6px;
        font-weight: 700;
        
        :focus {
        outline-color: #1877F2;
        }

        ::placeholder {
            color: #9F9F9F;
        }
    }

    input[type=submit] {
        background-color: #1877F2;
        cursor: pointer;
        color: white;
    }

    a {
        text-decoration: underline;
        color: white;
        font-size: 20px;
        white-space: nowrap;
    }


    @media (max-width: 375px){
        left: 50%;
        transform: translateX(-50%);
        top: 215px;
        gap: 11px;

        input {
            width: 330px;
            height: 55px;
            font-size: 22px;
        }

        a {
            margin-top: 6px;
            font-size: 17px; 
        }
    }

`

export {
    SignUp,
    LogIn,
    WoodmarkContainer,
    TextContainer,
    Form,
};