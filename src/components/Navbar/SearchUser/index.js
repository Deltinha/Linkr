import { SearchUserWrapper, SuggestionsList, Username, FollowingText } from "./style";
import { useState } from "react";
import { getSearchUser } from "../../../services/linkr-api";
import { DebounceInput } from "react-debounce-input";
import { useHistory } from "react-router";
import { GoSearch } from "react-icons/go";

export default function SearchUser(){
    const token = localStorage.getItem('token');
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const history = useHistory();

    function gotoUserPage(userID){
        setSuggestions([])
        history.push(`/user/${userID}`)
    }

    function sortSuggestions(suggestions){
        suggestions.sort((sugg)=>sugg.isFollowingLoggedUser===false);
        setSuggestions(suggestions);
    }

    function updateSuggestions(e) {
        setValue(e.target.value);

        if (e.target.value.length < 3) {
            setSuggestions([]);
        }
        else {
            getSearchUser({token , queryString:e.target.value})
                .then((res)=>sortSuggestions(res.data.users))
                .catch((err)=>alert(err.response));
        }
    };
    
    
    return (
        <SearchUserWrapper>
            <GoSearch />
            <DebounceInput 
            placeholder='Pesquise por amigos e pessoas'
            value={value}
            minLength={3}
            debounceTimeout={300}
            onChange={e => updateSuggestions(e)}
            onFocus={e => updateSuggestions(e)}/>

            {suggestions.length > 0 &&
                <SuggestionsList>
                    {suggestions.map((suggestion, index)=>(
                        <li id={index} onClick={()=>gotoUserPage(suggestion.id)}>
                            <img src={suggestion.avatar} alt='user avatar'/>
                            <Username>{suggestion.username}</Username>
                            {suggestion.isFollowingLoggedUser && <FollowingText>•following</FollowingText>}
                        </li>
                    ))}
                </SuggestionsList>}
        </SearchUserWrapper>
    );
}