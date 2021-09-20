import styled from "styled-components";

const TrendingContainer = styled.div`
	background-color: #171717;
	width: 301px;
	height: 406px;
	border-radius: 16px;
	color: white;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	line-height: 130%;

	@media screen and (max-width: 1230px) {
		display: none;
	}
`;

const Title = styled.span`
	font-family: "Oswald", sans-serif;
	font-weight: 700;
	height: 61px;
	border-bottom: 1px solid #484848;
	font-size: 27px;
	box-sizing: border-box;
	width: 100%;
	display: inline-block;
	padding-left: 16px;
	display: flex;
	align-items: center;
`;

const Hashtags = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	padding: 22px 0 30px 16px;

	a {
		color: white;
		font-size: 19px;
		text-decoration: none;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
`;

export { TrendingContainer, Title, Hashtags };
