import styled from "styled-components";

const PostWrapper = styled.div`
	width: 611px;
	max-height: fit-content;
	min-height: 276px;
	background-color: #171717;
	border-radius: 16px;
	display: flex;
	padding: 17px;
	color: white;
	margin-bottom: 26px;
	word-break: break-word;
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
	position: relative;
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

const Hashtag = styled.span`
	color: white;
	font-weight: bold;
	cursor: pointer;
`;


const PostContents = styled.div`
	background: #1E1E1E;
	position: relative;
	border-radius: 16px;
`;

export {
	Hashtag,
	PostText,
	PostUserName,
	MainPostContainer,
	ProfilePic,
	AvatarAndLikesContainer,
	PostWrapper,
	PostContents,
};
