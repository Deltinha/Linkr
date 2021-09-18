import { useEffect, Component } from "react";
import { useHistory } from "react-router";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react/cjs/react.development";
import { getUserInfo } from "../../../services/linkr-api";
import * as S from './style';
import enhanceWithClickOutside from "react-click-outside";

export default function Navbar (){
    
    let history = useHistory();
    const [userAvatar, setUserAvatar] = useState('');
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');
    const [menuOpened, setMenuOpened] = useState(false);

    function logout(){
        localStorage.clear();
        history.push('/');
    }

    function goToRoute(route){
        setMenuOpened(false);
        history.push(route);
    }

    const MenuHandler = (() => {
        class MenuHandler extends Component {
            handleClickOutside() {
            setMenuOpened(false);
          }
    
          render() {
            if (menuOpened){
                return (
                    <div>
                        <S.NavbarMenu onClick={()=>setMenuOpened(false)}>
                            <FaAngleUp />
                            <img src={`${userAvatar}`} alt='User Avatar'/>
                        </S.NavbarMenu>
                        <S.NavbarLinks>
                                    <span onClick={()=>goToRoute('/myposts')} >My posts</span>
                                    <span onClick={()=>goToRoute('/mylikes')} >My likes</span>
                                    <span onClick={()=>logout()}>Logout</span>
                        </S.NavbarLinks>
                    </div>
                    );
            }
            return (
                <S.NavbarMenu onClick={()=>setMenuOpened(true)}>
                            <FaAngleDown />
                            <img src={`${userAvatar}`} alt='User Avatar'/>
                </S.NavbarMenu>
            );
          }
        }
        return enhanceWithClickOutside(MenuHandler);
      })();

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
                <MenuHandler />
            </S.Navbar>
        );
}