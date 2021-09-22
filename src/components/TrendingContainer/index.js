import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getTrendingHashtags } from '../../services/linkr-api';
import * as S from './style'

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

    return (
        <S.TrendingContainer>
            <S.Title>trending</S.Title>
            <S.Hashtags>
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
            </S.Hashtags>
            <Form onSubmit={() => history.push(`/hashtag/${hashtagInput}`)}>
                <Input 
                    placeholder="type a hashtag" 
                    onChange={(e) => setHashtagInput(e.target.value)}
                    value={hashtagInput}
                    />
                <p>#</p>
            </Form>
        </S.TrendingContainer>
    );
}
const Form = styled.form`
    width: 269px;
    border-radius: 8px;
    margin-left: 16px;
    margin-bottom: 15px;
    background-color: #252525;
    position: relative;
    p{
        font-size: 19px;
        line-height: 23px;
        position: absolute;
        top: 7px;
        left: 13px;
    }
`;

const Input = styled.input`
    height: 35px;
    width: 269px;
    border-radius: 8px;
    border: none;
    color: #575757;
    background-color: #252525;
    padding-left: 36px;
    font-family: Lato;
    font-size: 16px;
    font-style: italic;
    line-height: 19px;
    letter-spacing: 0.05em;
    font-family: Lato;
    :focus {
        box-shadow: none;
        outline: none;
    }
`;