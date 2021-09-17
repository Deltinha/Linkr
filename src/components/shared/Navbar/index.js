import { useEffect } from "react";
import { useHistory } from "react-router";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { getUserInfo } from "../../../services/linkr-api";
import * as S from './style';

export default function Navbar (){
    
    let history = useHistory();
    const [userAvatar, setUserAvatar] = useState('');
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token')

    function logout(){
        localStorage.clear();
        history.push('/');
    }

    function loadAvatar (){
        getUserInfo({userID, token})
            .then((res)=>setUserAvatar(res.data.user.avatar))
            .catch((res)=>{
                if (res.response.status === 403){
                    alert('sua sessão expirou. logue-se novamente');
                    history.push('/');
                }
            });
    }

    useEffect(loadAvatar,[userID, token, history]);

        return (
            <S.Navbar>
                <span>linkr</span>
    
                <S.NavbarMenu className='click-outside-listener'>
                    <FaAngleDown />
                    
                    <img src={`${userAvatar}`} alt='User Avatar'/>
                </S.NavbarMenu>
                <S.NavbarLinks>
                    <Link to='/myposts'>My posts</Link>
                    <Link to='/mylikes'>My likes</Link>
                    <span onClick={()=>logout()}>Logout</span>
                </S.NavbarLinks>
            </S.Navbar>
        );
}