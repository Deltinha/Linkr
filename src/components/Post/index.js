import styled from "styled-components";
import LikeButton from "./LikeButton";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
const POST = { width: "611px", height: "276px" }; // TODO refactor naming

export default function Post({ data, poster, likes }) {
	const userData = useContext(UserContext);
	const { id, text, link, linkTitle, linkDescription, linkImage } = data;
	const history = useHistory();

	function toggleLikeButton(isSelected) {
		if (isSelected) {
			// post deslike
			console.log("deslike"); // TODO not yet implemented
		} else {
			//post like
			console.log("like"); // TODO not yet implemented
		}
	}

	console.log(data);
	function wasLikedByMe() {
		return false; // TODO not yet implemented
	}

	function goToPosterPage() {
		history.push(`/user/${poster.id}`);
	}

	function openLink() {
		window.open(link);
	}

	return (
		<PostWrapper>
			<AvatarAndLikesContainer>
				<ProfilePic onClick={goToPosterPage} avatar={poster.avatar} />
				<LikeButton toggleSelection={toggleLikeButton} wasLikedByMe={wasLikedByMe} />
				{likes.length} likes
			</AvatarAndLikesContainer>

			<MainPostContainer>
				<PostUserName onClick={goToPosterPage}>{poster.username}</PostUserName>

				<PostText>{text}</PostText>

				<LinkCard to={link} style={{ textDecoration: "none" }}>
					{/* TODO fazer uma parada mais maneira */}

					<LinkTextsContainer>
						<LinkTitle>{linkTitle}</LinkTitle>
						<LinkDescription>{linkDescription}</LinkDescription>
						<LinkPreview onClick={openLink}>{link}</LinkPreview>
					</LinkTextsContainer>

					<img src={linkImage} onClick={openLink} />
				</LinkCard>
			</MainPostContainer>
		</PostWrapper>
	);
}

const PostWrapper = styled.div`
	width: ${POST.width};
	max-height: fit-content;
	background-color: #171717;
	border-radius: 16px;
	display: flex;
	padding: 17px;
	color: white;
	margin-bottom: 26px;
	word-break: break-all; // TODO ver se tem alguma coisa melhor que isso
`;

const AvatarAndLikesContainer = styled.div`
	width: 15%;
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
`;

const MainPostContainer = styled.div`
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
`;

const PostText = styled.div`
	font-size: 17px;
	padding: 10px 0px;
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
`;

const LinkTitle = styled.div`
	color: #cecece;
	font-size: 16px;
	line-height: 19px;
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
