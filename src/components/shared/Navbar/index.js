import { useEffect, Component } from "react";
import { useHistory } from "react-router";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
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

    function toggleShowMenu(input) {
        if (input){
            setMenuOpened(true);
            console.log('mostrei');
        }
        else {
            setMenuOpened(false);
            console.log('escondi');
        }
    }

    const style = {
        backgroundColor: '#green',
        border: '2px solid #f0f',
      };

  const MenuHandler = (() => {
    class MenuHandler extends Component {
        handleClickOutside() {
        toggleShowMenu(false);
      }

      render() {
        if (menuOpened){
            return (
                <div style={style}>
                    <S.NavbarMenu onClick={()=>toggleShowMenu(false)}>
                        <FaAngleDown />
                        <img src={`${userAvatar}`} alt='User Avatar'/>
                    </S.NavbarMenu>
                    <S.NavbarLinks>
                                <Link to='/myposts'>My posts</Link>
                                <Link to='/mylikes'>My likes</Link>
                                <span onClick={()=>logout()}>Logout</span>
                    </S.NavbarLinks>
                </div>
                );
        }
        return (
            <S.NavbarMenu onClick={()=>toggleShowMenu(true)}>
                        <FaAngleDown />
                        <img src={`${userAvatar}`} alt='User Avatar'/>
            </S.NavbarMenu>
        );
      }
    }
    return enhanceWithClickOutside(MenuHandler);
  })();

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
                <MenuHandler />
            </S.Navbar>
        );
}