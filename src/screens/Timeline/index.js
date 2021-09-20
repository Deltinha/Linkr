import { getAllPosts } from "../../services/linkr-api";
import { useState, useEffect } from "react";
import Post from "../../components/Post";
import Loader from "../../components/Loader";
import TrendingContainer from "../../components/TrendingContainer";
import {
	PageWrapper,
	PageTitle,
	MainContainer,
	PostsContainer,
	PageContentWrapper,
	WarningMessage,
	NewPostContainer,
} from "../../components/shared/CommonStyled";

export default function Timeline() {
	const [timelinePosts, setTimelinePosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const token = localStorage.getItem("token");

	useEffect(fetchPosts, [token]);

	function fetchPosts() {
		getAllPosts({ token }).then(
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
						<NewPostContainer /> {/*TO-DO */}
						{isLoading ? (
							<Loader />
						) : timelinePosts.length === 0 ? (
							<WarningMessage>Nenhum Post Encontrado</WarningMessage>
						) : (
							timelinePosts.map((post) => (
								<Post key={post.id} data={post} poster={post.user} likes={post.likes} />
							))
						)}
					</PostsContainer>
					<TrendingContainer />
				</MainContainer>
			</PageContentWrapper>
		</PageWrapper>
	);
}
