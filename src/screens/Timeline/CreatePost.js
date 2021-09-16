import styled from "styled-components";
import { useState, useEffect } from "react";
import { postPostUser } from "../../services/linkr-api";

export default function CreatePost() {
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [waiting, setWaiting] = useState(false);

    function sendingPost(event) {
        event.preventDefault();
        setWaiting(true)

        if(validateUrl(url)) {
            const body = {
                text: description,
                link: url
            }
            const promise = postPostUser(body, "");          
            promise.then((resp) => {
                console.log(resp.data);
                setDescription("");
                setUrl("");
                setWaiting(false);
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
        <InfoPost>
            <img src="https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/628/avatar" alt="profile"/>
            <FormDescription>
                <h6>O que você tem pra favoritar hoje?</h6>
                <Form onSubmit={sendingPost}>
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
            </FormDescription>
        </InfoPost>
    );
}

function validateUrl(url) {
    let matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return matcher.test(url);
}

const InfoPost = styled.div`
    display: flex;
    justify-content: space-around;
    height: 209px;
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

const FormDescription = styled.div`
    height: 66px;
    width: 502px;
    margin-top: 21px;
    h6 {
        font-family: Lato;
        font-size: 20px;
        font-weight: 300;
        line-height: 24px;
        margin-bottom: 10px;
        color: #707070;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column; 
    input {
        font-family: Lato;
        font-size: 15px;
        font-weight: 300;
        line-height: 18px;
        height: 30px;
        padding-left: 13px;
        border-radius: 5px;
        margin-bottom: 5px;
        border: none;
        background-color: #EFEFEF;
    }
    input:not(:first-child) {
        padding-bottom: 33px;
    }
    input::placeholder {
        color: #949494;
    }
    button {
        height: 31px;
        width: 112px;
        font-family: Lato;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        border-radius: 5px;
        background-color: #1877F2;
        color: #fff;
        border: none;
        align-self: flex-end;
    }
`;