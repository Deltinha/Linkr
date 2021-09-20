import styled from "styled-components";
import Modal from "styled-react-modal";

const DeleteButtonWrapper = styled.div`
    font-size: 14px;
    cursor: pointer;
    position: absolute;
    right: 22px;
    top: 23px;
`;

const DeleteModal = Modal.styled`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #333333;
  width: 597px;
  height: 262px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: 38px 113px 66px 113px;
  border-radius: 50px;
  
  span {
    color: white;
    font-weight: 700;
    font-size: 34px;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 27px;
  }

  button {
    width: 134px;
    height: 37px;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    font-weight: 700;
  }

`
const ConfirmButton = styled.button`
  background-color: #1877F2;
  color: white;
`;

const CancelButton = styled.button`
  background-color: white;
  color: #1877F2;
`;

const ModalBackground = styled.div`
display: flex;
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: 30;
opacity: 0.9;
background-color: white;
`;

export {DeleteButtonWrapper, DeleteModal, ModalBackground, ConfirmButton, CancelButton};