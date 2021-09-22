import styled from "styled-components";
import Modal from "styled-react-modal";

const PageWrapper = styled.div`
	font-family: "Lato", sans-serif;
	font-weight: 400;
	width: 100%;
	background-color: #333333;
	padding-top: 72px;
	display: flex;
	justify-content: center;
`;

const PageTitle = styled.div`
	font-family: "Oswald", sans-serif;
	color: white;
	line-height: 64px;
	font-size: 43px;
	font-weight: 700;
	width: 100%;
	display: flex;
	justify-content: left;
	margin-bottom: 30px;

	@media screen and (max-width: 1230px) {
		margin-bottom: 12px;
		width: 611px;
		padding-left: 12px;
	}

	@media screen and (max-width: 600px) {
		width: 100%;
		font-size: 33px;
	} ;
`;

const PageContentWrapper = styled.div`
	width: 930px;
	height: 100%;
	padding-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (max-width: 1230px) {
		width: 100vw;
		max-width: 100vw;
		padding-top: 20px;
	}
`;

const NewPostContainer = styled.div`
	border: 2px solid white;
	width: 611px;
	height: 209px;
	margin-bottom: 29px;
	border-radius: 11px;
	@media screen and (max-width: 1230px) {
		width: 100vw;
		height: 164px;
	}
`;

const PostsContainer = styled.div`
	margin-right: 25px;
	@media screen and (max-width: 1230px) {
		margin-right: 0px;
	}
`;

const MainContainer = styled.div`
	display: flex;
`;

const WarningMessage = styled.div`
	display: flex;
	justify-content: center;
	font-size: 20px;
	color: white;
`;

const DeleteButtonWrapper = styled.div`
    font-size: 14px;
    cursor: pointer;
    position: absolute;
    right: 0px;
    top: 5px;
    height: 20px;
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
    cursor: pointer;
  }

  @media (max-width: 640px){
    width: 355px;
    height: 210px;
    padding: 30px 10px 40px 10px;

    button {
      font-size: 14px;
      width: 107px;
      height: 30px;
    }
  }
`;

const ModalText = styled.span`
    color: white;
	font-family: Lato;
    font-weight: 700;
    font-size: 34px;
    text-align: center;

    @media (max-width: 640px){
      font-size: 27px;
    }
`;

const ConfirmButton = styled.button`
    font-family: Lato;
	background-color: ${({lightColor})=>lightColor ? 'rgba(24, 119, 242, 0.4)' : 'rgb(24, 119, 242)'};
	color: white;
`;

const CancelButton = styled.button`
    font-family: Lato;
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
	background-color: rgba(255,255,255,0.9);
`;

export {
	WarningMessage,
	MainContainer,
	PostsContainer,
	NewPostContainer,
	PageContentWrapper,
	PageWrapper,
	PageTitle,
	DeleteButtonWrapper,
	DeleteModal, 
	ModalBackground, 
	ConfirmButton, 
	CancelButton, 
	ModalText
};
