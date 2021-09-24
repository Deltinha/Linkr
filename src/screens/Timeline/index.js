import { getFollowingPosts, getFollowingPostsEarlierThan } from "../../services/linkr-api";
import { useState, useEffect } from "react";
import Post from "../../components/Post";
import CreatePost from "../../components/NewPost";
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
	const token = localStorage.getItem("token");
	const refreshRate = 1500;

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

	function updatePosts() {
		const firstPostID = timelinePosts[0].id;

		getFollowingPostsEarlierThan({ token, firstPostID }).then((res) => {
			if (!(res.data.posts.length === 0)) {
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
						{isLoading ? (
							<Loader />
						) : timelinePosts.length === 0 ? (
							<WarningMessage>Nenhum Post Encontrado</WarningMessage>
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
