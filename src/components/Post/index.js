import LikeButton from "./LikeButton";
import { useHistory } from "react-router-dom";
import ReactHashtag from "react-hashtag";
import {
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
} from "./style";
import DeleteButton from "./DeleteButton";

export default function Post({ data, poster, likes }) {
	const { text, link, linkTitle, linkDescription, linkImage, user, id } = data;
	const history = useHistory();
	const userID = localStorage.getItem('userID')

	function toggleLikeButton(isSelected) {
		if (isSelected) {
			// post deslike
			// TODO not yet implemented
		} else {
			//post like
			// TODO not yet implemented
		}
	}

	function wasLikedByMe() {
		return false; // TODO not yet implemented
	}

	function goToPosterPage() {
		history.push(`/user/${poster.id}`);
	}

	function openLink() {
		window.open(link);
	}

	function openHashtag(hashtag) {
		const formattedHashtag = hashtag.substring(1, hashtag.length);
		history.push(`/hashtag/${formattedHashtag}`);
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

				<PostText>
					<ReactHashtag
						renderHashtag={(hashtagValue) => (
							<Hashtag onClick={() => openHashtag(hashtagValue)}>{hashtagValue}</Hashtag>
						)}
					>
						{text}
					</ReactHashtag>
				</PostText>

				<LinkCard>
					<LinkTextsContainer>
						<LinkTitle onClick={openLink}>{linkTitle}</LinkTitle>

						<LinkDescription>{linkDescription}</LinkDescription>

						<LinkPreview onClick={openLink}>{link}</LinkPreview>
					</LinkTextsContainer>

					<img src={linkImage} onClick={openLink} alt="imagem ilustrativa do link" />
				</LinkCard>
			</MainPostContainer>

			{( user.id === Number(userID) ) && <DeleteButton id={id}/>}
		</PostWrapper>
	);
}
