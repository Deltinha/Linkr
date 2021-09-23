import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getComments } from "../../services/linkr-api";
import styled from "styled-components";
import Comment from "./Comment";
import { getUserInfo } from "../../services/linkr-api";
import { FiSend } from 'react-icons/fi';

export default function Comments({idPost, idUser}) {

    const userID = localStorage.getItem("userID");
	const token = localStorage.getItem("token");
	const [userAvatar, setUserAvatar] = useState("");
    const [data, setData] = useState([]);
    
    function loadComments() {
        getComments(idPost, token)
        .then((res) => {
            setData(res.data);
        })
        .catch(() => {
            alert("Erro ao obter comentários");
        }); 
    }

	function loadAvatar() {
		getUserInfo({ userID, token })
			.then((res) => setUserAvatar(res.data.user.avatar))
			.catch((res) => {
				alert("Erro");
			});
	}
	useEffect(loadComments, []);
    useEffect(loadAvatar, []);

   // console.log(idPost, idUser);
    return (
        <ContainerComments>
            <Comment data={data}/>
            <Footer>
                <img src={userAvatar} alt=""/>
                <form>
                    <input placeholder="write a comment..."/>
                </form>
                <IconBox>
                  <FiSend color= "#fff" fontSize="18px"/>
                </IconBox>
            </Footer>
        </ContainerComments>
    );
}



const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 9px;
    right: 10px;
`;

const ContainerComments = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 26px;
    img {
        height: 39px;
        width: 39px;
        margin-left: 8px;
        border-radius: 304px;
    }
`;


const Footer = styled.div`
    background-color: red;
    width: 571px;
    display: flex;
    align-items: center;
    position: relative;
    form{
        margin-left: 14px;
        position: relative;
    }
    input {
        font-family: Lato;
        font-size: 14px;
        font-style: italic;
        font-weight: 400;
        line-height: 17px;
        height: 39px;
        width: 510px;
        padding-left: 15px;
        border-radius: 8px;
        color: #575757;
        background-color: #252525;
        border: none;
        :focus {
            box-shadow: none;
            outline: none;
        }
    }
`;