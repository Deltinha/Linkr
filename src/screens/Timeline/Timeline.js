import styled from "styled-components";
import CreatePost from "./CreatePost"
export default function Timeline() {

    return (<>
        <Container>
           <h1>timeline</h1>
           <CreatePost />           
        </Container>
    </>);
}

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