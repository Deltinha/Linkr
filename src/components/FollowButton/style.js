import styled from "styled-components";

const FollowButtonWrapper = styled.button`
	font-family: "Lato", sans-serif;
	font-size: 14px;
    font-weight: 700;
	width: 112px;
	height: 31px;
	border: none;
	border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
	
    cursor: ${({disabled})=>disabled ? 'default' : 'pointer'};
	background-color: ${({disabled})=>disabled ? 'rgba(24, 119, 242, 0.4)' : 'rgb(24, 119, 242)'};
	color: white;
`;

export {
    FollowButtonWrapper,
}