import styled from "styled-components";

const LinkCard = styled.div`
	border: 1px solid #4d4d4d;
	border-radius: 11px;
	height: 100%;
	display: flex;

	img {
		cursor: pointer;
		width: 30%;
		height: 100%;
	}
`;

const LinkTextsContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	padding: 24px 18px;
	flex: 1;
`;

const LinkTitle = styled.div`
	color: #cecece;
	font-size: 16px;
	line-height: 19px;
	cursor: pointer;
`;

const LinkDescription = styled.div`
	font-size: 11px;
	line-height: 13px;
	color: #9b9595;
	padding-top: 5px;
	padding-bottom: 13px;
`;

const LinkPreview = styled.div`
	font-size: 11px;
	line-height: 13px;
	color: #cecece;
	cursor: pointer;
`;

const YtLink = styled.span`
	font-size: 17px;
	color: #B7B7B7;
	margin-top: 6px;
	cursor: pointer;
`;

export {
	LinkPreview,
	LinkDescription,
	LinkTitle,
	LinkTextsContainer,
	LinkCard,
    YtLink,
}