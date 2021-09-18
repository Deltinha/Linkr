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
import { postDislike, postLike } from "../../services/linkr-api";
import { useEffect, useState } from "react";

export default function Post({ data, poster, likes }) {
	const { text, link, linkTitle, linkDescription, linkImage, id } = data;
	const history = useHistory();
	const token = localStorage.getItem('token');
	const userID = localStorage.getItem('userID');
	const [likedByMe, setLikedByMe] = useState(false);
	const [likesCount, setLikesCount] = useState(likes.length);

	function toggleLikeButton() {
		if (likedByMe) {
			setLikesCount(likesCount - 1);
			setLikedByMe(false);
			postDislike({id, token})
				.then(()=>console.log('disliked'))
				.catch(()=>{
					setLikedByMe(true);
					setLikesCount(likesCount + 1);
				});
		} else {
			setLikesCount(likesCount + 1);
			setLikedByMe(true);
			postLike({id, token})
				.then(()=>console.log('liked'))
				.catch(()=>{
					setLikedByMe(false);
					setLikesCount(likesCount - 1);
				});
		}
	}
	
	function fillLikedByMe() {
		likes.map((like)=>{
			if (like.userId === Number(userID)) {
				setLikedByMe(true);
			}
		});
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

	useEffect(fillLikedByMe,[]);

	return (
		<PostWrapper>
			<AvatarAndLikesContainer>
				<ProfilePic onClick={goToPosterPage} avatar={poster.avatar} />
				<LikeButton toggleSelection={toggleLikeButton} likedByMe={likedByMe} setLikedByMe={setLikedByMe}/>
				{likesCount} likes
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
		</PostWrapper>
	);
}
