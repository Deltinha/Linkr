import { SearchUserWrapper, SuggestionsList } from "./style";
import { useState } from "react";
import { getSearchUser } from "../../../services/linkr-api";
import { DebounceInput } from "react-debounce-input";
import { useHistory } from "react-router";

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
        setSuggestions(suggestions)     
    }

    function updateSuggestions(e) {
        setValue(e.target.value);

        if (e.target.value.length < 3) {
            setSuggestions([]);
        }
        else {
            getSearchUser({token , queryString:e.target.value})
                .then((res)=>sortSuggestions(res.data.users))
                .catch((err)=>console.log(err.response));
        }
    };

    return (
        <SearchUserWrapper>
            <DebounceInput 
            value={value}
            minLength={3}
            debounceTimeout={300}
            onChange={e => updateSuggestions(e)}
            onFocus={e => updateSuggestions(e)}/>

            <SuggestionsList>
                {suggestions.map((suggestion)=>(
                    <li onClick={()=>gotoUserPage(suggestion.id)}>
                        <span>{suggestion.username}</span>
                    </li>
                ))}
            </SuggestionsList>
        </SearchUserWrapper>
    );
}