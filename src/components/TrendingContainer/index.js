import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getTrendingHashtags } from "../../services/linkr-api";
import { 
	Container, 
	Title, 
	Hashtags,
	Form,
	Input,
} from './style'

export default function TrendingContainer(){
    const token = localStorage.getItem('token');
    const [hashtagsArray, setHashtagasArray] = useState([]);
    const [hashtagInput, setHashtagInput] = useState("");
    const history = useHistory();

    useEffect(()=>{
        getTrendingHashtags({token})
            .then((res)=>setHashtagasArray(res.data.hashtags))
            .catch(()=>null)
    },[]);

    function goHashtag(e) {
        e.preventDefault();
        history.push(`/hashtag/${hashtagInput}`)
    }

    return (
        <Container>
            <Title>trending</Title>
            <Hashtags>
                {hashtagsArray.length !== 0 ?
                hashtagsArray.map((hashtag)=>(
                    <Link 
                        to={`/hashtag/${hashtag.name}`} 
                        key={hashtag.id}>
                            {`# ${hashtag.name}`}
                    </Link>
                ))
                :
                null}
            </Hashtags>
            <Form onSubmit={goHashtag}>
                <Input 
                    placeholder="type a hashtag" 
                    onChange={(e) => setHashtagInput(e.target.value)}
                    value={hashtagInput}
                    />
                <p>#</p>
            </Form>
        </Container>
    );
}
