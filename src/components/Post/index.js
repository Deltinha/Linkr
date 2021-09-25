import LikeButton from "./LikeButton";
import { useHistory } from "react-router-dom";
import ReactHashtag from "react-hashtag";
import EditPost from "../EditPost";
import DeleteButton from "./DeleteButton";
import { postDislike, postLike } from "../../services/linkr-api";
import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import YtEmbedVideo from "./YtEmbedVideo";
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
	YtLink,
} from "./style";
import LinkPreviewModal from "./LinkPreviewModal";

export default function Post({ data, poster, likes, fetchPosts }) {
	const { text, link, linkTitle, linkDescription, linkImage, id } = data;
	const history = useHistory();
	const token = localStorage.getItem("token");
	const userID = localStorage.getItem("userID");
	const [likedByMe, setLikedByMe] = useState(
		Boolean(likes.find((like) => like["user.id"] === Number(userID)))
	);
	const [likesCount, setLikesCount] = useState(likes.length);
	const [tooltipText, setTooltipText] = useState("");
	const [previewOpen, setPreviewOpen] = useState(false);

	function toggleLikeButton() {
		if (likedByMe) {
			setLikesCount(likesCount - 1);
			setLikedByMe(false);
			postDislike({ id, token })
				.then(() => null)
				.catch(() => {
					setLikedByMe(true);
					setLikesCount(likesCount + 1);
				});
		} else {
			setLikesCount(likesCount + 1);
			setLikedByMe(true);
			postLike({ id, token })
				.then(() => null)
				.catch(() => {
					setLikedByMe(false);
					setLikesCount(likesCount - 1);
				});
		}
	}

	function fillLikedByMe() {
		likes.map((like) => {
			if (like.userId === Number(userID)) {
				setLikedByMe(true);
			}
		});
		generatelikeTooltipText();
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

	function generatelikeTooltipText() {
		if (likesCount === 1) {
			if (likedByMe) {
				setTooltipText("Você.");
			} else {
				setTooltipText(likes[0]["user.username"]);
			}
		}
		if (likesCount === 2) {
			const findUser = likes.find((like) => like["user.id"] !== Number(userID))["user.username"];
			if (likedByMe) {
				setTooltipText(`Você e ${findUser}.`);
			} else {
				const findAnotherUser = likes.find(
					(like) => like["user.id"] !== Number(userID) && like["user.username"] !== findUser
				)["user.username"];
				setTooltipText(`${findUser} e ${findAnotherUser}.`);
			}
		}
		if (likesCount >= 3) {
			const findUser = likes.find((like) => like["user.id"] !== Number(userID))["user.username"];
			const findAnotherUser = likes.find(
				(like) => like["user.id"] !== Number(userID) && like["user.username"] !== findUser
			)["user.username"];
			if (likedByMe) {
				setTooltipText(`Você, ${findUser} e outras ${likesCount - 2} pessoas.`);
			} else {
				setTooltipText(`${findUser}, ${findAnotherUser} e outras ${likesCount - 2} pessoas.`);
			}
		}
	}

	useEffect(fillLikedByMe, []);
	useEffect(generatelikeTooltipText, [likesCount]);

	return (
		<PostWrapper>
			<AvatarAndLikesContainer>
				<ProfilePic onClick={goToPosterPage} avatar={poster.avatar} />

				<LikeButton
					toggleSelection={toggleLikeButton}
					likedByMe={likedByMe}
					setLikedByMe={setLikedByMe}
				/>

				{likesCount > 0 ? (
					<div>
						<p data-tip data-for={`tolltip${id}`}>
							{likesCount} likes
						</p>
						<ReactTooltip id={`tolltip${id}`} effect="solid" place="bottom" type='light'>
							<span style={{ display: "flex", justifyContent: "center", width: "100px", fontWeight:'700', fontSize:'11px' }}>
								{tooltipText}
							</span>
						</ReactTooltip>
					</div>
				) : (
					<span>{likesCount} likes</span>
				)}
			</AvatarAndLikesContainer>

			<MainPostContainer>
				<PostUserName onClick={goToPosterPage}>{poster.username}</PostUserName>
				{data.user.id === Number(userID) ? (
					<>
						<EditPost data={data} fetchPosts={fetchPosts} />
						<DeleteButton fetchPosts={fetchPosts} id={id} />
					</>
				) : (
					<PostText>
						<ReactHashtag
							renderHashtag={(hashtagValue) => (
								<Hashtag onClick={() => openHashtag(hashtagValue)}>{hashtagValue}</Hashtag>
							)}
						>
							{text}
						</ReactHashtag>
					</PostText>
				)}
				
				{
					link.includes('www.youtube.com/watch?v=')
					? <>
					<YtEmbedVideo link={link}/>
					<YtLink onClick={openLink}>{link}</YtLink>
					</>
					: <LinkCard>
						<LinkTextsContainer>
							<LinkTitle onClick={()=>setPreviewOpen(true)}>{linkTitle}</LinkTitle>

							<LinkDescription>{linkDescription}</LinkDescription>

							<LinkPreview onClick={()=>setPreviewOpen(true)}>{link}</LinkPreview>

							<LinkPreviewModal previewOpen={previewOpen} setPreviewOpen={setPreviewOpen} link={link} openLink={openLink}/>
						</LinkTextsContainer>

						<img src={linkImage} onClick={()=>setPreviewOpen(true)} alt="imagem ilustrativa do link" />
					</LinkCard>
				}			
			</MainPostContainer>
		</PostWrapper>
	);
}
