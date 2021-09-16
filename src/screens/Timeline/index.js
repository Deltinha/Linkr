import { getAllPosts } from "../../services/linkr-api";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import Post from "../../components/Post";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import { PageWrapper, PageTitle } from "../../components/shared/CommonStyled";
import {
	MainContainer,
	TrendingContainer,
	PostsContainer,
	NewPostContainer,
	TimelineWrapper,
} from "./style";

export default function Timeline() {
	const { userData } = useContext(UserContext);
	const [timelinePosts, setTimelinePosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(
		() =>
			getAllPosts({ token: userData.token }).then(
				(res) => {
					setTimelinePosts(res.data.posts);
					setIsLoading(false);
				},
				(err) => {
					alert("Houve uma falha ao obter os posts, por favor atualize a página");
					setIsLoading(false);
				}
			),
		[]
	);

	return (
		<PageWrapper>
			<Header />
			<TimelineWrapper>
				<PageTitle>timeline</PageTitle>
				<MainContainer>
					<PostsContainer>
						<NewPostContainer /> {/*TO-DO */}
						{isLoading ? (
							<Loader />
						) : timelinePosts.length === 0 ? (
							"Nenhum Post Encontrado"
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
