import Modal from "styled-react-modal";

const LinkPreviewWrapper = Modal.styled`
    background-color: #333333;
    border-radius: 20px;
    height: 904px;
    width: 966px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 22px 16px 0 16px;
    display: flex;
    flex-direction: column;
    gap: 23px;

    div {
        display: flex;
        justify-content: space-between;
    }

    button {
        border: none;
        background-color: #1877F2;
        border-radius: 5px;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        color: white;
        width: 138px;
        height: 31px;
        cursor: pointer;
    }

    svg {
        color: white;
        font-size: 30px;
        cursor: pointer;
    }

    iframe {
        width: 100%;
        height: 821px;
        background-color: white;
    }
`;

export {
    LinkPreviewWrapper,
}