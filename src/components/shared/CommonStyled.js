import styled from "styled-components";

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
	justify-content: space-between;
	margin-bottom: 30px;
	align-items: center;

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

const UserName = styled.span`
	width: calc(100% - 112px - 25px);
	word-wrap: break-word;
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

export {
	WarningMessage,
	MainContainer,
	PostsContainer,
	NewPostContainer,
	PageContentWrapper,
	PageWrapper,
	PageTitle,
	UserName,
};
