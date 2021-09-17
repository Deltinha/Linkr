import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { getTrendingHashtags } from '../../services/linkr-api';
import * as S from './style'

export default function TrendingContainer(){
    const token = localStorage.getItem('token');
    const [hashtagsArray, setHashtagasArray] = useState([]);

    useEffect(()=>{
        getTrendingHashtags({token})
            .then((res)=>setHashtagasArray(res.data.hashtags))
            .catch(()=>null)
    },[]);

    console.log(hashtagsArray);
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
        </S.TrendingContainer>
    );
}