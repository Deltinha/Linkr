import { useState, useEffect } from "react";
import Post from "../../components/Post";
import Loader from "../../components/Loader";
import {
	PageWrapper,
	PageTitle,
	MainContainer,
	PostsContainer,
	PageContentWrapper,
	WarningMessage,
} from "../../components/shared/CommonStyled";
import TrendingContainer from "../../components/TrendingContainer";
import { getUserPosts } from "../../services/linkr-api";

export default function MyPosts() {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const token = localStorage.getItem("token");
	const userID = localStorage.getItem("userID");

	useEffect(fetchPosts, [token, userID]);

	function fetchPosts() {
		getUserPosts({ token, userID }).then(
			(res) => {
				setPosts(res.data.posts);
				setIsLoading(false);
			},
			() => {
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
				<PageTitle>{`my posts`}</PageTitle>
				<MainContainer>
					<PostsContainer>
						{isLoading ? (
							<Loader />
						) : posts.length === 0 ? (
							<WarningMessage>Nenhum Post Encontrado</WarningMessage>
						) : (
							posts.map((post) => (
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
