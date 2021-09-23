import { getAllPosts } from "../../services/linkr-api";
import { useState, useEffect } from "react";
import Post from "../../components/Post";
import CreatePost from "../../components/NewPost";
import Loader from "../../components/Loader";
import TrendingContainer from "../../components/TrendingContainer";
import useInterval from "react-useinterval";
import InfiniteScroll from "react-infinite-scroller";
import {
	PageWrapper,
	PageTitle,
	MainContainer,
	PostsContainer,
	PageContentWrapper,
	WarningMessage,
} from "../../components/shared/CommonStyled";

export default function Timeline() {
	const [timelinePosts, setTimelinePosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const token = localStorage.getItem("token");
	const [delay, setDelay] = useState(15000);

	useEffect(fetchPosts, [token]);

	useInterval(() => {
		setIsLoading(true);
		fetchPosts();
	}, delay);

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
						<CreatePost fetchPosts={fetchPosts} />
						{isLoading ? (
							<Loader />
						) : timelinePosts.length === 0 ? (
							<WarningMessage>Nenhum Post Encontrado</WarningMessage>
						) : (
							<InfiniteScroll
								pageStart={0}
								loadMore={() => console.log("mais")}
								hasMore={true}
								initialLoad={true}
								loader={<div>carregano</div>}
							>
								{() =>
									timelinePosts.map((post) => (
										<Post
											fetchPosts={fetchPosts}
											key={post.id}
											data={post}
											poster={post.user}
											likes={post.likes}
										/>
									))
								}
							</InfiniteScroll>
						)}
					</PostsContainer>
					<TrendingContainer />
				</MainContainer>
			</PageContentWrapper>
		</PageWrapper>
	);
}
