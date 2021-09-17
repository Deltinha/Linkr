import { UserContext } from "../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import { getUserPosts, getUserInfo } from "../../services/linkr-api";

export default function UserPosts() {
	const { id } = useParams();
	const [posts, setPosts] = useState([]);
	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const { token } = useContext(UserContext);

	useEffect(fetchPosts, [token, id]);

	function fetchPosts() {
		getUserPosts({ token, userID: id }).then(
			(res) => {
				setPosts(res.data.posts);
				setIsLoading(false);
			},
			() => {
				alert("Houve uma falha ao obter os posts, por favor atualize a página");
				setIsLoading(false);
			}
		);
	}

	getUserInfo({ token, userID: id }).then(
		(res) => setName(res.data.user.username),
		() => alert("Houve uma falha ao encontrar o usuário buscado")
	);

	return (
		<PageWrapper>
			<PageContentWrapper>
				<PageTitle>{`${name}'s posts`}</PageTitle>
				<MainContainer>
					<PostsContainer>
						{isLoading ? (
							<Loader />
						) : posts.length === 0 ? (
							<WarningMessage>Nenhum Post Encontrado</WarningMessage>
						) : (
							posts.map((post) => (
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
