import styled from "styled-components";

const Container = styled.div`
    width: 611px;
	max-height: fit-content;
	background-color: #fff;
	border-radius: 16px;
	display: flex;
	color: white;
	margin-bottom: 26px;
	word-break: break-word;

	@media screen and (max-width: 600px) {
		width: 100%;
		max-width: 100vw;
	}
`;

const BoxPost = styled.div`
    display: flex;
    justify-content: space-around;
    height: 209px;
    width: 611px;
    border-radius: 16px;
    background-color: #fff;
    padding-top: 16px;
    box-shadow: 0px 4px 4px 0px #00000040;
    img {
        height: 50px;
        width: 50px;
        margin-top: 16px;
        border-radius: 26.5px;
    }
    @media screen and (max-width: 800px) {
		width: 100%;
		height: 164px;
	}
`;

const BoxDescription = styled.div`
    height: 66px;
    width: 502px;
    margin-top: 10px;
    h6 {
        font-family: Lato;
        font-style: normal;
        font-size: 20px;
        font-weight: 300;
        line-height: 24px;
        margin-bottom: 10px;
        color: #707070;
    }                                                   
`;

const Form = styled.form`
    display: flex;
    flex-direction: column; 
    input {
        font-family: Lato;
        font-size: 15px;
        font-weight: 300;
        line-height: 18px;
        height: 30px;
        padding-left: 13px;
        border-radius: 5px;
        margin-bottom: 5px;
        border: none;
        background-color: #EFEFEF;
    }
    input:not(:first-child) {
        height: 66px;
        padding-bottom: 33px;
    }
    input::placeholder {
        font-family: Lato;
        font-size: 15px;
        font-style: normal;
        font-weight: 300;
        line-height: 18px;
        color: #949494;
    }
    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;   
    }
    button {
        height: 31px;
        width: 112px;
        font-family: Lato;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        border-radius: 5px;
        background-color: #1877F2;
        color: #fff;
        border: none;
        align-self: flex-end;
    }
`;

export {
    Container,
    BoxPost,
    BoxDescription,
    Form
}