import { getFollowingPosts, getFollowingPostsEarlierThan } from "../../services/linkr-api";
import { useState, useEffect } from "react";
import Post from "../../components/Post";
import CreatePost from "../../components/NewPost";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import Loader from "../../components/Loader";
import TrendingContainer from "../../components/TrendingContainer";
import useInterval from "react-useinterval";
import {
	PageWrapper,
	PageTitle,
	MainContainer,
	PostsContainer,
	PageContentWrapper,
	WarningMessage,
} from "../../components/shared/CommonStyled";

export default function Timeline() {
	const [timelinePosts, setTimelinePosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isNewPostsLoading, setIsNewPostsLoading] = useState(false);
	const token = localStorage.getItem("token");
	const refreshRate = 15000;
	const { followedUsers } = useContext(UserContext);

	useEffect(fetchPosts, [token]);

	useInterval(() => {
		updatePosts();
	}, refreshRate);

	function fetchPosts() {
		getFollowingPosts({ token })
			.then((res) => {
				setTimelinePosts([...res.data.posts]);
				setIsLoading(false);
			})
			.catch((err) => {
				if (token) {
					alert("Houve uma falha ao obter os posts, por favor atualize a página");
				}
				setIsLoading(false);
			});
	}

	/**
	 * Returns the repostId of the first post if it a repost, otherwise returns its id
	 * @returns the id or reposId of the first post
	 */
	function getFirstPostID() {
		const firstPost = timelinePosts[0];

		if (firstPost.repostId) {
			return firstPost.repostId;
		}

		return firstPost.id;
	}

	function updatePosts() {
		const firstPostID = getFirstPostID();
		getFollowingPostsEarlierThan({ token, firstPostID }).then((res) => {
			if (!(res.data.posts.length === 0)) {
				setIsNewPostsLoading(true);
				setTimeout(() => setIsNewPostsLoading(false), 500);
				setTimelinePosts([...res.data.posts, ...timelinePosts]);
			}
		});
	}

	return (
		<PageWrapper>
			<PageContentWrapper>
				<PageTitle>timeline</PageTitle>
				<MainContainer>
					<PostsContainer>
						<CreatePost fetchPosts={fetchPosts} />
						{isNewPostsLoading ? <Loader message={"Carregando novos Posts..."} /> : ""}
						{isLoading ? (
							<Loader />
						) : timelinePosts.length === 0 ? (
							followedUsers.length === 0 ? (
								<WarningMessage>
									Você não segue ninguém ainda, procure por perfis na busca
								</WarningMessage>
							) : (
								<WarningMessage>Nenhuma publicação encontrada</WarningMessage>
							)
						) : (
							timelinePosts.map((post, index) => (
								<Post
									fetchPosts={fetchPosts}
									key={index}
									data={post}
									poster={post.user}
									likes={post.likes}
								/>
							))
						)}
					</PostsContainer>
					<TrendingContainer />
				</MainContainer>
			</PageContentWrapper>
		</PageWrapper>
	);
}
