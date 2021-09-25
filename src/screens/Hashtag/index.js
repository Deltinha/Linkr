import { useParams } from "react-router-dom";
import { getPostsHashtag, getHashtagPostsOlderThan } from "../../services/linkr-api";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { PageWrapper, PageTitle } from "../../components/shared/CommonStyled";
import TrendingContainer from "../../components/TrendingContainer";
import {
	MainContainer,
	PostsContainer,
	PageContentWrapper,
	WarningMessage,
} from "../../components/shared/CommonStyled";
import InfiniteScroller from "../../components/InfiniteScroller";

export default function Hashtag() {
	const [hashtagPosts, setHashtagPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const token = localStorage.getItem("token");
	const { hashtag } = useParams();

	function fetchHashtagPosts() {
		getPostsHashtag(hashtag, token)
			.then((res) => {
				setHashtagPosts(res.data.posts);
				setIsLoading(false);
			})
			.catch(() => {
				alert("Houve uma falha ao obter os posts, por favor atualize a página");
				setIsLoading(false);
			});
	}

	function getMorePosts({ lastPostId }) {
		return getHashtagPostsOlderThan({ token, lastPostId, hashtag });
	}

	useEffect(fetchHashtagPosts, [hashtag, token]);
	return (
		<PageWrapper>
			<PageContentWrapper>
				<PageTitle># {hashtag}</PageTitle>
				<MainContainer>
					<PostsContainer>
						{isLoading ? (
							<Loader />
						) : hashtagPosts.length === 0 ? (
							<WarningMessage>Nenhum Post Encontrado</WarningMessage>
						) : (
							<InfiniteScroller
								getMorePostsFunction={getMorePosts}
								fetchPosts={fetchHashtagPosts}
								posts={hashtagPosts}
								setPosts={setHashtagPosts}
							/>
						)}
					</PostsContainer>
					<TrendingContainer />
				</MainContainer>
			</PageContentWrapper>
		</PageWrapper>
	);
}
