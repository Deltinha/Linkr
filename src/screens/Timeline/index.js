import { getAllPosts } from "../../services/linkr-api";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import Post from "../../components/Post";
import Loader from "../../components/Loader";
import { PageWrapper, PageTitle } from "../../components/shared/CommonStyled";
import {
	MainContainer,
	TrendingContainer,
	PostsContainer,
	NewPostContainer,
	TimelineWrapper,
	WarningMessage,
} from "./style";

export default function Timeline() {
	const { token } = useContext(UserContext);
	const [timelinePosts, setTimelinePosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(fetchPosts, [token]);

	function fetchPosts() {
		getAllPosts({ token }).then(
			(res) => {
				setTimelinePosts(res.data.posts);
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
			<TimelineWrapper>
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
					<TrendingContainer /> {/*TO-DO */}
				</MainContainer>
			</TimelineWrapper>
		</PageWrapper>
	);
}
