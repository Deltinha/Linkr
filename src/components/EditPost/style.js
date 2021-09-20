import styled from "styled-components";

const IconBox = styled.div`
    position: absolute;
    right: 25px;
    top: 5px;
    cursor: pointer;
`;

const BoxForm = styled.div `
    width:100%;
    background-color: #fff;
    border-radius: 7px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column; 

    textarea {
        font-family: Lato;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        min-height: 44px;
        padding-left: 13px;
        border-radius: 5px;
        margin-bottom: 5px;
        border: none;
        background-color: #fff;
        color: #4C4C4C;

        :focus {
            box-shadow: 0 0 0 0;
            outline: 0;   
        }
    }
    @media screen and (max-width: 600px) {
        width: 100%;
        height: 164px;
    }
`;

export{
    IconBox,
    BoxForm,
    Form
}