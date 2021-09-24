import styled from "styled-components";

export const StyledLoaderWrapper = styled.div`
	width: 611px;
	flex: 1;
	color: white;
	font-size: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: blue;

	@media screen and (max-width: 1230px) {
		width: 100%;
	}
`;
