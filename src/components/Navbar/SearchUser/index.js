import { SearchUserWrapper, SuggestionsList } from "./style";
import { useState, useContext, useEffect } from "react";
import { getSearchUser } from "../../../services/linkr-api";
import { DebounceInput } from "react-debounce-input";
import { useHistory } from "react-router";
import UserContext from "../../../contexts/UserContext";

export default function SearchUser(){
    const token = localStorage.getItem('token');
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const suggestionsString = JSON.stringify(suggestions);
    const history = useHistory();

    function gotoUserPage(userID){
        setValue('');
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
            minLength={3}
            debounceTimeout={300}
            onChange={e => updateSuggestions(e)}/>

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





function App() {
  

  return (
    <div className='container'>
 
    </div>
  );
}