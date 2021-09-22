import styled from "styled-components";
import LikeButton from "./LikeButton";
import { useHistory } from "react-router-dom";
import ReactHashtag from "react-hashtag";
import EditPost from "../EditPost";
import DeleteButton from "./DeleteButton";
import RePost from "../RePost";
import { MdRepeat } from 'react-icons/md';
import { postDislike, postLike } from "../../services/linkr-api";
import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
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
		<>
			<PostContents>
				{data.repostCount != 0 ? 
						<RepostUser fetchPosts={fetchPosts}>
							<MdRepeat fontSize="20px"/>
							<p>Re-posted by <span>{
								data.repostedBy ? (data.repostedBy.id === Number(userID) ? "you" : data.repostedBy.username) : "you"}</span>
							</p>
						</RepostUser>
					:
						"" 
				}
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

						<RePost data={data} fetchPosts={fetchPosts}/>

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
			</PostContents>
		</>
	);
}

const PostContents = styled.div`
	background: #1E1E1E;
	position: relative;
	border-radius: 16px;
`;

const RepostUser = styled.div`
	width: 611px;
	background-color: #1E1E1E;
	border-radius: 16px;
	height: 33px;
	display: flex;
	align-items: center;
	padding-left: 16px;
	color: white;
	font-family: Lato;
	font-size: 11px;
	font-weight: 400;
	line-height: 13px;
	p {
		margin-left: 5px;
	}
	span {
		font-weight: 700;
	}
	@media screen and (max-width: 600px) {
		width: 100%;
		max-width: 100vw;
		border-radius: 0;
	}
`;
