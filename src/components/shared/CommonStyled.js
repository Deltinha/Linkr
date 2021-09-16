import styled from "styled-components";

const PageWrapper = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
	font-family: "Lato", sans-serif;
	font-weight: 400;
	width: 100%;
	background-color: #333333;
	padding-top: 72px;
	display: flex;
	justify-content: center;
`;

const PageTitle = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
	font-family: "Oswald", sans-serif;
	color: white;
	line-height: 64px;
	font-size: 43px;
	font-weight: 700;
	width: 100%;
	display: flex;
	justify-content: left;
	margin-bottom: 30px;

	@media screen and (max-width: 800px) {
		margin-bottom: 12px;
		padding-left: 12px;
	} ;
`;

const TimelineWrapper = styled.div`
	width: 930px;
	height: 100%;
	padding-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 800px) {
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

	@media screen and (max-width: 800px) {
		width: 100vw;
		height: 164px;
	}
`;

const PostsContainer = styled.div`
	margin-right: 25px;

	@media screen and (max-width: 800px) {
		margin-right: 0px;
	}
`;

const TrendingContainer = styled.div`
	width: 301px;
	height: 406px;
	border: 2px solid red;
	border-radius: 11px;

	@media screen and (max-width: 800px) {
		display: none;
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
	TrendingContainer,
	PostsContainer,
	NewPostContainer,
	TimelineWrapper,
	PageWrapper,
	PageTitle,
};
