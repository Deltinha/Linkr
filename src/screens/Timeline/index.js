import { getAllPosts } from "../../services/linkr-api";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import Post from "../../components/Post";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import { PageWrapper, PageTitle } from "../../components/shared/TimeLineStyled";

export default function Timeline() {
	const { userData } = useContext(UserContext);
	const [timelinePosts, setTimelinePosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(
		() =>
			getAllPosts({ token: userData.token }).then(
				(res) => {
					console.log("response getAllPosts ", res.data);
					setTimelinePosts(res.data.posts);
					setIsLoading(false);
				},
				(err) => {
					console.log("err getAllPosts", err.response.data);
					console.log(userData.token);
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
						<NewPostContainer />
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
					<TrendingContainer />
				</MainContainer>
			</TimelineWrapper>
		</PageWrapper>
	);
}

const TimelineWrapper = styled.div`
	width: 920px;
	height: 100%;
	padding-top: 70px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const NewPostContainer = styled.div`
	border: 2px solid white;
	width: 611px;
	height: 209px;
	margin-bottom: 29px;
`;

const PostsContainer = styled.div`
	margin-right: 25px;
`;

const TrendingContainer = styled.div`
	width: 301px;
	height: 406px;
	border: 2px solid red;
`;

const MainContainer = styled.div`
	display: flex;
`;
