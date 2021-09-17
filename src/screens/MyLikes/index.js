import { getLikedPosts } from "../../services/linkr-api";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import Post from "../../components/Post";
import Loader from "../../components/Loader";
import {
	PageWrapper,
	PageTitle,
	MainContainer,
	TrendingContainer,
	PostsContainer,
	PageContentWrapper,
	WarningMessage,
} from "../../components/shared/CommonStyled";

export default function MyLikes() {
	const { token } = useContext(UserContext);
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
				alert("Houve uma falha ao obter os posts, por favor atualize a página");
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
								<Post key={post.id} data={post} poster={post.user} likes={post.likes} />
							))
						)}
					</PostsContainer>
					<TrendingContainer /> {/*TO-DO */}
				</MainContainer>
			</PageContentWrapper>
		</PageWrapper>
	);
}
