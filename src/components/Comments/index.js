import { useEffect, useState } from "react";
import { getComments, getFollowedByMe, postComment, getUserInfo } from "../../services/linkr-api";
import { FiSend } from 'react-icons/fi';
import { IconBox, ContainerComments, Footer } from "./style";
import Comment from "./Comment";
import Loader from "../../components/Loader";

export default function Comments({idPost, idUser, fetchPosts}) {

    const userID = localStorage.getItem("userID");
	const token = localStorage.getItem("token");
	const [userAvatar, setUserAvatar] = useState("");
    const [data, setData] = useState(null);
    const [text, setText] = useState("");
    const [follows, setFollows] = useState(null);
    const [waiting, setWaiting] = useState(false);

    function loadComments() {
        getComments(idPost, token)
        .then((res) => {
            setData(res.data);
        })
        .catch(() => {
            alert("Erro ao obter comentários");
        }); 
    }

    function loadFollows() {
        getFollowedByMe({token})
            .then((res) => {
                setFollows(res.data);
            })
            .catch(() => {
                alert("Erro ao obter lista de seguidores");
            }); 
    }

	function loadAvatar() {
		getUserInfo({ userID, token })
			.then((res) => setUserAvatar(res.data.user.avatar))
			.catch(() => {
				alert("Erro");
			});
	}

    function sendComment(e) {
        e.preventDefault();
        setWaiting(true);
        const body = {
            text: text,
        }
        postComment(idPost, body, token)
            .then(() => {
                fetchPosts();
                setWaiting(false);
                setText("");
            })
            .catch(() => {
                setWaiting(false);
                alert("Erro ao comentar");
            });
    }

    useEffect(loadComments, [text]);
    useEffect(loadAvatar, []);
    useEffect(loadFollows, []);

    return (
        <ContainerComments>
            {follows && data && userAvatar ?  
                <>
                    <Comment data={data} id={idUser} follows={follows.users}/>
                    <Footer>
                        <img src={userAvatar} alt=""/>
                        <form onSubmit={sendComment}>
                            <input 
                                value={text} 
                                placeholder="write a comment..." 
                                onChange={(e) => setText(e.target.value)} 
                                disabled={waiting}
                            />
                        </form>
                        <IconBox onClick={sendComment} disabled={waiting}>
                        <FiSend color= "#fff" fontSize="18px"/>
                        </IconBox>
                    </Footer>
                </>
             : <Loader />}
        
        </ContainerComments>
    );
}
