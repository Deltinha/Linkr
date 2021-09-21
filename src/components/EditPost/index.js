import styled from "styled-components";
import { FaPencilAlt} from "react-icons/fa";
import {useState,useRef,useEffect } from "react";
import ReactHashtag from "react-hashtag"
import axios from "axios";
import { Hashtag, PostText } from "../Post/style";
import { useHistory } from "react-router-dom";

export default function EditPost({data}) {

    const [clicked,setCliked]=useState(false);
    const [waiting, setWaiting] = useState(false);
    const [text,setText]=useState("");
    const history = useHistory();
    const inputRef = useRef();
   
    useEffect(() => {
        if (clicked) {
          console.log(inputRef.current);
          inputRef.current.focus()
          
        }    
    }, [clicked]);

    
    function printa(){
        setCliked(true);
        setText(data.text)
        console.log("apertou")
    }
    

    function openHashtag(hashtag) {
		const formattedHashtag = hashtag.substring(1, hashtag.length);
		history.push(`/hashtag/${formattedHashtag}`);
	}

    function saveEdition(){
        setCliked(false);
        console.log("salvou")
    }

    console.log(text)
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
        input:not(:first-child) {
            height: 47px;
            padding-bottom: 20px;
        }
	}
`;