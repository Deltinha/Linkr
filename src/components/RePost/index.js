import { CancelButton, ConfirmButton, DeleteModal, ModalText } from "../shared/CommonStyled";
import { useState } from "react";
import { MdRepeat } from 'react-icons/md';
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { postShare } from "../../services/linkr-api";

export default function RePost({data, fetchPosts}) {

    const [clicked,setClicked] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const token = localStorage.getItem('token');

    function sharePost() { 
        setWaiting(true);
        postShare(data.id, token)
            .then((res) => {
                fetchPosts();
                setWaiting(false);
                setClicked(false);
            })
            .catch(() => {
                alert("Erro ao compartilhar post");
            })
    }

    return (
        <>
            <IconBox>
                <MdRepeat fontSize="20px"  onClick={() => setClicked(true)} />
                <p>{data.repostCount} re-posts</p>
            </IconBox>
            <DeleteModal
                isOpen={clicked}
                onBackgroundClick={()=>setClicked(false)}
                onEscapeKeydown={()=>setClicked(false)}
            >
                <ModalText>Do you want to re-post this link?</ModalText>
                <div>
                    <CancelButton disabled={waiting} onClick={()=> setClicked(false)}>No, cancel</CancelButton>
                    <ConfirmButton disabled={waiting} onClick={sharePost}>
                        { waiting ? 
                            <Loader type="ThreeDots" color="#FFF" height={30} />
                            :
                            'Yes, share!'
                        }
                    </ConfirmButton>
                </div>       
            </DeleteModal>
        </>
    );
}

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 185px;
    cursor: pointer;
`;