import { getFollowingPosts, getFollowers } from "../../services/linkr-api";
import { useState, useEffect } from "react";
import Post from "../../components/Post";
import CreatePost from "../../components/NewPost";
import Loader from "../../components/Loader";
import TrendingContainer from "../../components/TrendingContainer";
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

	//////////////////////////////
	const [followers, setFollowers] = useState([]);
	// TO-DO temporario!!! moises irá colocar os followers no context
	function fetchFollowers() {
		getFollowers({ token }).then(
			(res) => setFollowers(res.data),
			(err) => console.log(err.response.message)
		);
	}
	///////////////////////////////

	useEffect(fetchPosts, [token]);

	function fetchPosts() {
		getFollowingPosts({ token }).then(
			(res) => {
				setTimelinePosts(res.data.posts);
				setIsLoading(false);
			},
			(err) => {
				if (token) {
					alert("Houve uma falha ao obter os posts, por favor atualize a página");
				}
				setIsLoading(false);
			}
		);
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
							followers.length === 0 ? (
								<WarningMessage>
									Você não segue ninguém ainda, procure por perfis na busca
								</WarningMessage>
							) : (
								<WarningMessage>Nenhuma publicação encontrada</WarningMessage>
							)
						) : (
							timelinePosts.map((post) => (
								<Post
									fetchPosts={fetchPosts}
									key={post.id}
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
