import { useState, useEffect } from "react";
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
import { getUserPosts, getUserPostsOlderThan } from "../../services/linkr-api";
import InfiniteScroller from "../../components/InfiniteScroller";

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

	function getMorePosts({ token, lastPostId }) {
		return getUserPostsOlderThan({ token, lastPostId, userID });
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
