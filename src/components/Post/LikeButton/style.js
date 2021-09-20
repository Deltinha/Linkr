import styled from "styled-components";
const LikeButtonWrapper = styled.div`
	width: 100%;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${(props) => (props.selected ? "#AC0000" : "#FFFFFF")};
	margin-top: 20px;
	margin-bottom: 5px;
	font-size: 20px;
`;

export { LikeButtonWrapper };
