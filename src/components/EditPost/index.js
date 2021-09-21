import styled from "styled-components";
import ReactHashtag from "react-hashtag"
import { FaPencilAlt } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { Hashtag, PostText } from "../Post/style";
import { useHistory } from "react-router-dom";
import { releasePost } from "../../services/linkr-api";

export default function EditPost({data, fetchPosts}) {

    const [clicked,setCliked]=useState(false);
    const [waiting, setWaiting] = useState(false);
    const [text,setText] = useState("");
    const history = useHistory();
    const inputRef = useRef();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (clicked) {
            inputRef.current.focus()        
            const handleEsc = (e) => {
                if (e.keyCode === 27) {
                  setCliked(!clicked)
                }
            };
            window.addEventListener('keydown', handleEsc);
            return () => {
                window.removeEventListener('keydown', handleEsc);
            };
        }    
    }, [clicked]);

    function printa(){
        setCliked(!clicked);
        setText(data.text)
    }
    
    function openHashtag(hashtag) {
		const formattedHashtag = hashtag.substring(1, hashtag.length);
		history.push(`/hashtag/${formattedHashtag}`);
	}

    function saveEdition(){
        const body = {
            text,
        }
        setWaiting(true)
        releasePost(data.id, body, token)
            .then((res) => {
                setCliked(!clicked);
                fetchPosts();
            })
            .catch(() => {
                setWaiting(false);
                alert("Erro ao atualizar post");
            })
    }

   function verifyKey(e) {
        if(e.which === 13) saveEdition();
    }

    return (<>
        <IconBox>
            <FaPencilAlt onClick={printa} /> 
        </IconBox>
        <PostText>
            {clicked ?
                <BoxForm>
                    <Form onSubmit={saveEdition}>
                        <textarea 
                            cols="10" 
                            wrap="soft" 
                            ref={inputRef}
                            value={text}
                            disabled={waiting}
                            onChange={(e) => setText(e.target.value)}
                            onKeyPress={(e) => verifyKey(e)}
                        />
                    </Form>
                </BoxForm>
            : 
               <ReactHashtag
                    renderHashtag={(hashtagValue) => (
                        <Hashtag onClick={() => openHashtag(hashtagValue)}>{hashtagValue}</Hashtag>
                    )}
                >
                    {data.text}
                </ReactHashtag>
            }
        </PostText>

    </>);
}

const IconBox = styled.div`
    background-color: red;
    position: absolute;
    right: 25px;
    top: 5px;
    cursor: pointer;
`;

const BoxForm = styled.div `
    width:100%;
    background-color: #fff;
    border-radius: 7px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column; 

    textarea {
        font-family: Lato;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        min-height: 44px;
        padding-left: 13px;
        border-radius: 5px;
        margin-bottom: 5px;
        border: none;
        background-color: #fff;
        color: #4C4C4C;

        :focus {
            box-shadow: 0 0 0 0;
            outline: 0;   
        }
    }
    @media screen and (max-width: 600px) {
		width: 100%;
		height: 164px;
	}
`;