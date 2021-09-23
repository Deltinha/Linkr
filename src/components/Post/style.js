import styled from "styled-components";
const PostWrapper = styled.div`
	width: 611px;
	max-height: fit-content;
	background-color: #171717;
	border-radius: 16px;
	display: flex;
	padding: 17px;
	color: white;
	margin-bottom: 26px;
	word-break: break-word;
	position: relative;

	@media screen and (max-width: 600px) {
		width: 100%;
		max-width: 100vw;
		border-radius: 0;
	}
`;

const AvatarAndLikesContainer = styled.div`
	width: 12%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 11px;
`;

const ProfilePic = styled.div`
	background-image: url("${(props) => props.avatar}");
	background-position: 50% 10%;
	background-repeat: no-repeat;
	background-size: 150%;
	border-radius: 50px;
	width: 50px;
	height: 50px;
	cursor: pointer;

	@media screen and (max-width: 600px) {
		width: 40px;
		height: 40px;
	}
`;

const MainPostContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-left: 19px;
	color: #ffffff;
`;

const PostUserName = styled.div`
	font-size: 19px;
	font-weight: bold;
	cursor: pointer;
	width: calc(100% - 70px);
`;

const PostText = styled.div`
	font-size: 17px;
	padding: 12px 0px;
	color: #b7b7b7;
`;

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
	color: #b7b7b7;
	margin-top: 7px;
	cursor: pointer;
	word-break: break-all;
`;

const Hashtag = styled.span`
	color: white;
	font-weight: bold;
	cursor: pointer;
`;

export {
	Hashtag,
	LinkPreview,
	LinkDescription,
	LinkTitle,
	LinkTextsContainer,
	LinkCard,
	PostText,
	PostUserName,
	MainPostContainer,
	ProfilePic,
	AvatarAndLikesContainer,
	PostWrapper,
	YtLink,
};
