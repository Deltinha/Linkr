import { useContext, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react/cjs/react.development";
import { UserContext } from "../../../contexts/UserContext";
import { getUserInfo } from "../../../services/linkr-api";
import * as S from './style';

export default function Navbar (){

    const {userID, token} = useContext(UserContext);
    const [userAvatar, setUserAvatar] = useState('');

    function loadAvatar (){
        getUserInfo({userID, token})
            .then((res)=>setUserAvatar(res.data.user.avatar))
            .catch(()=>console.log('erro'));
    }

    useEffect(loadAvatar,[userID, token]);

        return (
            <S.Navbar>
                <span>linkr</span>
    
                <S.NavbarMenu>
                    <FaAngleDown />
                    
                    <img src={`${userAvatar}`} alt='User Avatar'/>
                </S.NavbarMenu>
            </S.Navbar>
        );
}