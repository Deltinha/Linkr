import { getLikedPosts } from "../../services/linkr-api";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
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

export default function MyLikes() {
	const token = localStorage.getItem("token");
	const [likedPosts, setLikedPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(fetchPosts, [token]);

	function fetchPosts() {
		getLikedPosts({ token }).then(
			(res) => {
				setLikedPosts(res.data.posts);
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
				<PageTitle>my likes</PageTitle>
				<MainContainer>
					<PostsContainer>
						{isLoading ? (
							<Loader />
						) : likedPosts.length === 0 ? (
							<WarningMessage>Nenhum Post Encontrado</WarningMessage>
						) : (
							likedPosts.map((post) => (
								<Post fetchPosts={fetchPosts} key={post.id} data={post} poster={post.user} likes={post.likes} />
							))
						)}
					</PostsContainer>
					<TrendingContainer /> {/*TO-DO */}
				</MainContainer>
			</PageContentWrapper>
		</PageWrapper>
	);
}
