import styled from "styled-components";

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    cursor: pointer;
    bottom: 9px;
    right: 10px;
`;

const ContainerComments = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 26px;
    img {
        height: 39px;
        width: 39px;
        margin-left: 8px;
        border-radius: 304px;
    }
`;

const Footer = styled.div`
    width: 571px;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 25px;
    form{
        margin-left: 14px;
        position: relative;
    }
    input {
        font-family: Lato;
        font-size: 14px;
        font-style: italic;
        font-weight: 400;
        line-height: 17px;
        height: 39px;
        width: 510px;
        padding-left: 15px;
        border-radius: 8px;
        color: #575757;
        background-color: #252525;
        border: none;
        :focus {
            box-shadow: none;
            outline: none;
        }
    }
`;

const CardComment = styled.div`
    margin-top: 12px;
    max-height: 205px;
    overflow-y: scroll;
`;

const ContentComment = styled.div`
    display: flex;
    font-family: Lato;
    font-size: 14px;
    line-height: 17px;
    word-break: break-word;
    margin-bottom: 15px;
    width: 571px;
	border-bottom: 1px solid #353535;
    div{
        margin-left: 18px;
        margin-bottom: 19px;
    }
    h6{
        font-weight: 700;
        color: #F3F3F3;
        width: 100%;
        cursor: pointer;
    }
    span{
        font-weight: 400;
        color: #565656;
    }
    p{
        font-weight: 400;
        color: #ACACAC;
    }
    img {
        cursor: pointer;
    }
`;

export {
    IconBox,
    ContainerComments,
    Footer,
    CardComment,
    ContentComment
}