import styled from "styled-components";

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
	TimelineWrapper,
};
