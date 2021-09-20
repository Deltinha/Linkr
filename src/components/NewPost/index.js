import { postNewPoster } from "../../services/linkr-api";
import { useState, useEffect } from "react";
import { ProfilePic } from "../Post/style";
import { Container, BoxDescription, BoxPost, Form } from "./style";

export default function CreatePost({fetchPosts}) {

    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [waiting, setWaiting] = useState(false);
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');

    function sendPost(event) {
        event.preventDefault();
        setWaiting(true)

        if(validateUrl(url)) {

            const body = {
                text: description,
                link: url
            }

            postNewPoster(body, token)
                .then((resp) => {
                    setDescription("");
                    setUrl("");
                    setWaiting(false);
                    fetchPosts();
                }).catch(() => {
                    alert("Houve um erro ao publicar seu link");
                    setWaiting(false);
                })
        } else {
            alert("Insira uma URL válida");
            setWaiting(false);
        }
    }
    
    return (
            <Container>
               <BoxPost>
                    <ProfilePic avatar="https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/628/avatar" />
                    <BoxDescription>
                        <h6>O que você tem pra favoritar hoje?</h6>
                        <Form onSubmit={sendPost}>
                            <input
                                type="text" 
                                value={url}
                                placeholder="http://..." 
                                onChange={(e) => setUrl(e.target.value)} 
                                disabled={waiting}
                                required
                            />
                            <input 
                                type="text"
                                value={description} 
                                placeholder="Muito irado esse link falando de #javascript" 
                                onChange={(e) => setDescription(e.target.value)} 
                                disabled={waiting} 
                                required
                            />
                            <button type="submit" disabled={waiting}>
                                {waiting ? "Publishing..." : "Publicar"}
                            </button>
                        </Form>
                    </BoxDescription>
                </BoxPost>
            </Container>
    );
}

function validateUrl(url) {
    let matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return matcher.test(url);
}
