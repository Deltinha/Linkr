import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Post";
import Loader from "../../components/Loader";
import {
	PageWrapper,
	PageTitle,
	MainContainer,
	PostsContainer,
	PageContentWrapper,
	WarningMessage,
	UserName,
	FollowButton,
} from "../../components/shared/CommonStyled";
import TrendingContainer from "../../components/TrendingContainer";
import { getUserPosts, getUserInfo } from "../../services/linkr-api";
import UserContext from "../../contexts/UserContext";

export default function UserPosts() {
	const { id } = useParams();
	const [posts, setPosts] = useState([]);
	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const token = localStorage.getItem("token");
	const {updateFollowedUsers} = useContext(UserContext);
	const followedUsers = useContext(UserContext);

	useEffect(()=>{
		fetchPosts();
		updateFollowedUsers();
	}, [token, id]);

	function fetchPosts() {
		getUserPosts({ token, userID: id }).then(
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

	getUserInfo({ token, userID: id })
		.then((res) => setName(res.data.user.username))
		.catch(() => {
			if (token) {
				alert("Houve uma falha ao encontrar o usuário buscado");
			}
		});

	return (
		<PageWrapper>
			<PageContentWrapper>
				<PageTitle>
					<UserName>{`${name}'s posts`}</UserName>
					<FollowButton>Seguir</FollowButton>
				</PageTitle>
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
					<TrendingContainer /> {/*TO-DO */}
				</MainContainer>
			</PageContentWrapper>
		</PageWrapper>
	);
}
