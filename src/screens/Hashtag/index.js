
import { useParams } from "react-router-dom";
import { getPostsHashtag } from "../../services/linkr-api";
import { useState, useEffect } from "react";
import Post from "../../components/Post";
import Loader from "../../components/Loader";
import { PageWrapper, PageTitle } from "../../components/shared/CommonStyled";
import TrendingContainer from "../../components/TrendingContainer";
import {
	MainContainer,
	PostsContainer,
	PageContentWrapper,
	WarningMessage,
} from "../../components/shared/CommonStyled";

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
            .catch(() =>{
                alert("Houve uma falha ao obter os posts, por favor atualize a página");
                setIsLoading(false);
            });
    }
    
    useEffect(fetchHashtagPosts, [hashtag]);
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
                            hashtagPosts.map((post) => (
                                <Post key={post.id} data={post} poster={post.user} likes={post.likes} />
                            ))
                        )}
                    </PostsContainer>
                    <TrendingContainer />
                </MainContainer>
            </PageContentWrapper>
        </PageWrapper>
    );
}