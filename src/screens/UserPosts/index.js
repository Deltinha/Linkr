import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import {
	PageWrapper,
	PageTitle,
	MainContainer,
	PostsContainer,
	PageContentWrapper,
	WarningMessage,
	UserName,
} from "../../components/shared/CommonStyled";
import TrendingContainer from "../../components/TrendingContainer";
import { getUserPosts, getUserInfo, getUserPostsOlderThan } from "../../services/linkr-api";
import FollowButton from "../../components/FollowButton";
import InfiniteScroller from "../../components/InfiniteScroller";

export default function UserPosts() {
	const { id } = useParams();
	const userID = localStorage.getItem("userID");
	const [posts, setPosts] = useState([]);
	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const token = localStorage.getItem("token");

	useEffect(() => {
		fetchPosts();
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

	function getMorePosts({ lastPostId }) {
		return getUserPostsOlderThan({ token, lastPostId, userID: id });
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
					{id !== userID && <FollowButton />}
				</PageTitle>
				<MainContainer>
					<PostsContainer>
						{isLoading ? (
							<Loader />
						) : posts.length === 0 ? (
							<WarningMessage>Nenhum Post Encontrado</WarningMessage>
						) : (
							<InfiniteScroller
								getMorePostsFunction={getMorePosts}
								fetchPosts={fetchPosts}
								posts={posts}
								setPosts={setPosts}
							/>
						)}
					</PostsContainer>
					<TrendingContainer />
				</MainContainer>
			</PageContentWrapper>
		</PageWrapper>
	);
}
