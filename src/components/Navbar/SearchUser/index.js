import { SearchUserWrapper } from "./style";
import { useState } from "react";
import { getSearchUser } from "../../../services/linkr-api";

export default function SearchUser(){
    const token = localStorage.getItem('token');
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    function updateSuggestions(e) {
        
        setValue(e.target.value);
        console.log(value);
        

        if (e.target.value.length > 2) {
            getSearchUser({token , queryString:e.target.value})
                .then((res)=>setSuggestions(res.data.users))
                .catch((err)=>console.log(err.response))
        }

    };

    return (
        <SearchUserWrapper>
            <input
            type='text'
            value={value}
            onChange={e => updateSuggestions(e)}/>

        </SearchUserWrapper>
    );
}





function App() {
  

  return (
    <div className='container'>
 
    </div>
  );
}