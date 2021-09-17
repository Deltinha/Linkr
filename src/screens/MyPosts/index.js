import { UserContext } from "../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import Post from "../../components/Post";
import Loader from "../../components/Loader";
import {
	PageWrapper,
	PageTitle,
	MainContainer,
	TrendingContainer,
	PostsContainer,
	TimelineWrapper,
	WarningMessage,
} from "../../components/shared/CommonStyled";
import { getUserPosts } from "../../services/linkr-api";

export default function MyPosts() {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { token, userID } = useContext(UserContext);

	useEffect(fetchPosts, [token, userID]);

	function fetchPosts() {
		getUserPosts({ token, userID }).then(
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

	return (
		<PageWrapper>
			<TimelineWrapper>
				<PageTitle>{`my posts`}</PageTitle>
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
			</TimelineWrapper>
		</PageWrapper>
	);
}
