import ReactHashtag from "react-hashtag"
import { FaPencilAlt } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { Hashtag, PostText } from "../Post/style";
import { useHistory } from "react-router-dom";
import { releasePost } from "../../services/linkr-api";
import { IconBox, BoxForm, Form } from "./style";

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

    function changeValues(){
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
            <FaPencilAlt onClick={changeValues} /> 
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