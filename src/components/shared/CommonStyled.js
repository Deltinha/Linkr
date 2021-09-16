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

export { PageWrapper, PageTitle };
