
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Hashtag() {

    const {hashtag} = useParams();
    console.log(hashtag)
    console.log("hastag")
    return (<>
        <Container>
            <h1># reacta</h1>
            <InfoPost>
                <img src="https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/628/avatar" alt="profile"/>
                <Post>
                    <h6>Juvenal Juvêncio</h6>
                    <p>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</p>
                    <Materia>
                        <LinkDescription>
                            <h5>Como aplicar o Material UI em um projeto React</h5>
                            <p>
                                Hey! I have moved this tutorial to my personal blog. 
                                Same content, new location. 
                                Sorry about making you click through to another page.
                            </p>
                            <p>https://medium.com/@pshrmn/a-simple-react-router</p>
                        </LinkDescription>
                        <Image src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" alt=""/>
                    </Materia>
                </Post>
            </InfoPost>
            <Card>

            </Card>
        </Container>
    </>);
}

const LinkDescription = styled.div`
    width: 350px;
    height: 100%;
    background-color: #000;
    h5 {
        font-family: Lato;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: #CECECE;
    }
    p{
        width: 302px;
        
    }
`;

const Image = styled.img`
    height: 155px;
    width: 153px;
    border-radius: 0px 12px 13px 0px;
`;

const Post = styled.div`
    h6 {
        font-family: Lato;
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
    }

    p {
        height: 52px;
        width: 502px;
        font-family: Lato;
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
    }
`;

const Materia = styled.div`
    height: 155px;
    width: 503px;
    display: flex;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    color: #C4C4C4;
`;

const Container = styled.div`
    height: 100%;
    width: 42%;
    background-color: #000;
    margin: 125px 0 0 240px;
    h1 {
        font-family: Oswald;
        font-size: 43px;
        font-weight: 700;
        line-height: 64px;
        color: #fff; 
    }
`;

const Card = styled.div`
    height: 276px;
    width: 100%;
    border-radius: 16px;
    background-color: yellowgreen;
`;

const InfoPost = styled.div`
    display: flex;
    justify-content: space-around;
    height: 276px;
    width: 100%;
    margin-top: 45px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px #00000040;
    img {
        height: 50px;
        width: 50px;
        margin-top: 16px;
        border-radius: 26.5px;
    }
`;
